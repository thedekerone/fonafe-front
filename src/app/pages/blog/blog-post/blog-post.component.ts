import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { DatePipe } from '@angular/common';
import { PostService } from '../../../services/post-service';
import { LinkifyPipe } from '../../../utils/linkify.pipe';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DatePipe, LinkifyPipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  id: string = "";
  post: Post | null = null; // Initialize post as null or undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService // Inject PostService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
      this.getPost(this.id);
    });
  }

  getPost(id: string): void {
    if (!id) {
      this.router.navigate(["sala-de-prensa"]);
      return;
    }

    this.postService.getPostById(id).subscribe(postData => {
      if (postData) {
        this.post = postData;
      } else {
        // Handle the case where post is not found
        this.router.navigate(['sala-de-prensa']);
      }
    }, error => {
      // Handle any errors here
      console.error('Error fetching post:', error);
      this.router.navigate(['sala-de-prensa']);
    });
  }
}
