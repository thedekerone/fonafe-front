import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post-service';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';
import { getDownloadURL } from 'firebase/storage';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingComponent, ButtonComponent, QuillEditorComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  @Input() type: 'create' | 'edit' = "edit"
  @Input() title =  "Editar sala de prensa"
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
    this.loadingButton = true

    const task = await this.postService.uploadImage(fileToUpload)
    this.imgURL = await getDownloadURL(task.ref)
    console.log(this.imgURL)
    this.loadingButton = false
  }

  ngOnInit(): void {
    console.log(this.type)
    if (this.type === "create") return
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
    if (this.type === "create") {
      return this.createPost()
    }
    this.editPost()
  }

  createPost() {
    if (this.postForm.valid) {
      this.loading = true
      console.log('Form Submitted', this.postForm.value);
      this.postService.createPost({ ...this.postForm.value, imageUrl: this.imgURL, userId: this.userId }).subscribe(res => {
        this.router.navigate([`/sala-de-prensa/${res.id}`])
        this.loading = false
        console.log(res)
      }, err => console.log(err))
    } else {
      console.error('Form is not valid');
    }
  }

  editPost() {
    if (this.postForm.valid) {
      this.loadingButton = true
      this.postService.updatePost(this.postId, { ...this.postForm.value, imageUrl: this.imgURL, userId: this.userId }).subscribe(res => {
        console.log(res)
        this.loadingButton = false
        this.router.navigate([`/sala-de-prensa/${this.postId}`])
      })
    } else {
      this.loadingButton = false
      console.error('Form is not valid');
    }
  }
}

