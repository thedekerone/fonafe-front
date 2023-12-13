import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { QuillEditorComponent } from 'ngx-quill';
import { EditPostComponent } from '../edit-post/edit-post.component';
@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [EditPostComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

}
