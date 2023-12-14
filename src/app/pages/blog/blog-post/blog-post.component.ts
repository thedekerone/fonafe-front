import { Component, Input, OnInit, afterNextRender } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { DatePipe, Location } from '@angular/common';
import { PostService } from '../../../services/post-service';
import { LinkifyPipe } from '../../../utils/linkify.pipe';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { AuthService } from '../../../services/auth.service';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DatePipe, LinkifyPipe, LoadingComponent, QuillViewHTMLComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
})
export class BlogPostComponent implements OnInit {
  id: string = '';
  currentUrl: string = '';
  loading = false;
  @Input() post?: Post | null = null; // Initialize post as null or undefined
  userId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private postService: PostService,
    private authService: AuthService,
    private metaTagService: Meta,
    private titleService: Title
  ) {
      this.currentUrl = window.location.origin + this.location.path();
    // Alternatively, using Router (to get full URL)
  }
  setMetaTags() {
    if (this.post) {
      this.titleService.setTitle(this.post.title);
      this.metaTagService.updateTag({ name: 'description', content: this.post.content! });
      this.metaTagService.updateTag({ property: 'og:title', content: this.post.title });
      this.metaTagService.updateTag({ property: 'og:description', content: this.post.content! });
      this.metaTagService.updateTag({ property: 'og:url', content: this.currentUrl });
      this.metaTagService.updateTag({ property: 'og:image', content: this.post.imageUrl });
      this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      // Add more tags as needed
    }
  }

  ngOnInit() {
    this.setMetaTags();
    this.authService.user.subscribe(res => {
      this.userId = res?.uid ?? '';
    });
    if (this.post) return;
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.getPost(this.id);
    });
  }

  deletePost(id?: string) {
    if (!id) return;
    this.postService.deletePost(id).subscribe(res => {
      this.router.navigate(['/sala-de-prensa']);
    });
  }

  getPost(id: string): void {
    if (!id) {
      this.router.navigate(['sala-de-prensa']);
      return;
    }

    this.postService.getPostById(id).subscribe(
      postData => {
        if (postData) {
          this.loading = false;
          this.post = postData;
        } else {
          // Handle the case where post is not found
          this.router.navigate(['sala-de-prensa']);
        }
      },
      error => {
        // Handle any errors here
        this.router.navigate(['sala-de-prensa']);
      }
    );
  }
}
