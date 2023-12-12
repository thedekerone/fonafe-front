import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post-service';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  postId: string = ""; // Assuming post IDs are strings
  imgBase64 = ""
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      updatedDate: ['', Validators.required],
      category: ['']
    });
  }


handleFileInput(files: Event) {
    let fileToUpload = (files.currentTarget as HTMLInputElement)?.files?.item(0);
    if(!fileToUpload) return
    let reader = new FileReader();

    reader.onload = (event: any) => {
     this.imgBase64 = event.target.result;

    };

    fileToUpload && reader.readAsDataURL(fileToUpload);
}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['id'];
      this.postService.getPostById(this.postId).subscribe((postData: Post) => {
        this.postForm.patchValue(postData);
      });
    });
  }

  onSubmit() {
    console.log(this.postForm.value)
    if (this.postForm.valid) {
      this.postService.updatePost(this.postId, {...this.postForm.value, imageUrl: this.imgBase64}).subscribe(res=>{
        console.log(res)
        this.router.navigate(["/sala-de-prensa"])
      })
    } else {
      console.error('Form is not valid');
    }
  }
}

