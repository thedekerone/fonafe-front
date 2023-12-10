import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      img: [null], // Validators can be added if required
      date: ['', Validators.required],
      label: ['']
    });
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
    if (this.postForm.valid) {
      console.log('Form Submitted', this.postForm.value);
      // Update logic here, e.g., this.postService.updatePost(this.postId, this.postForm.value);
    } else {
      console.error('Form is not valid');
    }
  }
}

