import { Component } from '@angular/core';
import { CardListComponent } from '../../components/blog/card-list/card-list.component';
import { Post } from '../../models/post';
import { HeaderLineComponent } from '../../components/blog/header-line/header-line.component';
import { PostService } from '../../services/post-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardListComponent,FormsModule, HeaderLineComponent, LoadingComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  loading = false
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchTerm: string = '';

  constructor(private postService: PostService){}

  ngOnInit(){
    this.loading = true
    this.postService.getAllPosts().subscribe(data=>{
      this.posts = data;
      this.loading= false
      this.filteredPosts = data;
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post?.content?.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPosts = this.posts;
    }
  }
}

