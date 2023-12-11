import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/post-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;
  imgBase64: string= ""
  constructor(private formBuilder: FormBuilder,private router: Router, private postService:PostService) {
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

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted', this.postForm.value);
      this.postService.createPost({...this.postForm.value, imageUrl: this.imgBase64}).subscribe(res=>{
         this.router.navigate(["/sala-de-prensa"])

        console.log(res)}, err=>console.log(err))
      // Here you can add logic to handle the form submission
    } else {
      console.error('Form is not valid');
    }
  }
}
