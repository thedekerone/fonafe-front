import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/post-service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  loading = false
  postForm: FormGroup;
  imgBase64: string = ""
  userId = ""
  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService, private authService: AuthService) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      updatedDate: ['', Validators.required],
      category: ['', Validators.required]
    });
  }


  ngOnInit(){
    this.authService.user.subscribe(res=>{
      this.userId = res?.uid ?? ""
    })
  }

  handleFileInput(files: Event) {
    let fileToUpload = (files.currentTarget as HTMLInputElement)?.files?.item(0);
    if (!fileToUpload) return
    let reader = new FileReader();

    reader.onload = (event: any) => {
      this.imgBase64 = event.target.result;

    };

    fileToUpload && reader.readAsDataURL(fileToUpload);
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.loading = true
      console.log('Form Submitted', this.postForm.value);
      this.postService.createPost({ ...this.postForm.value, imageUrl: this.imgBase64, userId: this.userId}).subscribe(res => {
        this.router.navigate(["/sala-de-prensa"])
        this.loading = false
        console.log(res)
      }, err => console.log(err))
    } else {
      console.error('Form is not valid');
    }
  }
}
