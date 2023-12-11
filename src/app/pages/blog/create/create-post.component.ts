import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/post-service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService:PostService) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      img: [null], // Validators can be added if required
      updatedDate: ['', Validators.required],
      category: ['']
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted', this.postForm.value);
      this.postService.createPost(this.postForm.value).subscribe(res=>console.log(res), err=>console.log(err))
      // Here you can add logic to handle the form submission
    } else {
      console.error('Form is not valid');
    }
  }
}
