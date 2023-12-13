import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post-service';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';
import { getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingComponent, ButtonComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  loadingButton = false
  loading = false;
  userId = ""
  postId: string = ""; // Assuming post IDs are strings
  imgURL = ""
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      updatedDate: ['', Validators.required],
      category: ['']
    });
  }


  handleFileInput = async (files: Event) => {
    let fileToUpload = (files.currentTarget as HTMLInputElement)?.files?.item(0);
    if (!fileToUpload) return
    this.loading = true

    const task = await this.postService.uploadImage(fileToUpload)
    this.imgURL = await getDownloadURL(task.ref)
    console.log(this.imgURL)
    this.loading = false
  }

  ngOnInit(): void {
    this.loading = true
    this.authService.user.subscribe(res => {
      this.userId = res?.uid ?? ""
    })
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['id'];
      this.postService.getPostById(this.postId).subscribe((postData: Post) => {
        this.imgURL = postData.imageUrl
        this.loading = false
        this.postForm.patchValue({ ...postData, updatedDate: postData.updatedDate.toString().slice(0, 10) });
      }, () => {
        this.router.navigate(["/sala-de-prensa"])
      });
    });
  }

  onSubmit() {
    console.log(this.postForm.value)
    if (this.postForm.valid) {
      this.loadingButton = true
      this.postService.updatePost(this.postId, { ...this.postForm.value, imageUrl: this.imgURL, userId: this.userId }).subscribe(res => {
        console.log(res)
        this.loadingButton = false
        this.router.navigate(["/sala-de-prensa"])
      })
    } else {
      this.loadingButton = false
      console.error('Form is not valid');
    }
  }
}

