import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      img: [null], // Validators can be added if required
      date: ['', Validators.required],
      label: ['']
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted', this.postForm.value);
      // Here you can add logic to handle the form submission
    } else {
      console.error('Form is not valid');
    }
  }
}
