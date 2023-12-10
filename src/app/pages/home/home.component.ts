import { Component } from '@angular/core';
import { FeatureIconComponent } from '../../components/feature-icon/feature-icon.component';
import { HeaderLineComponent } from '../../components/blog/header-line/header-line.component';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/post';
import { CardListComponent } from '../../components/blog/card-list/card-list.component';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardListComponent, RouterLink, FeatureIconComponent, HeaderLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(data)
    });
  }

  onSelectPost(id: string): void {
    this.postService.getPostById(id).subscribe(data => {
      // Handle the selected post data, e.g., displaying it in a modal or a separate div
      console.log(data);
    });
  }
}
