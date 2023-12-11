import { Component } from '@angular/core';
import { CardListComponent } from '../../components/blog/card-list/card-list.component';
import { Post } from '../../models/post';
import { HeaderLineComponent } from '../../components/blog/header-line/header-line.component';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardListComponent, HeaderLineComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: Post[] = []

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.getAllPosts().subscribe(data=>{
      this.posts = data
    })
  }
}
