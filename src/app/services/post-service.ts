import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private mockPosts = [
    {
      id: '1',
      title: 'Exploring Angular',
      content: 'Discovering the features and capabilities of Angular...',
      img: 'angular-exploration.jpg',
      date: '2023-01-10',
      label: 'Technology'
    },
    {
      id: '2',
      title: 'The Future of Web Development',
      content: 'Predictions and trends for web development in the next decade...',
      img: 'future-web.jpg',
      date: '2023-02-15',
      label: 'Analysis'
    },
    {
      id: '3',
      title: 'JavaScript Frameworks Comparison',
      content: 'A detailed comparison of popular JavaScript frameworks...',
      img: 'js-frameworks.jpg',
      date: '2023-03-05',
      label: 'Education'
    },
    {
      id: '4',
      title: 'Optimizing Angular Performance',
      content: 'Tips and tricks for making your Angular application faster...',
      img: 'optimize-angular.jpg',
      date: '2023-04-20',
      label: 'Optimization'
    }
  ];

  constructor() { }

  getAllPosts(): Observable<any[]> {
    return of(this.mockPosts);
  }


  getPostById(id: string): Observable<any> {
    const post = this.mockPosts.find(p => p.id === id);
    return of(post);
  }

  updatePost(id: string, postData: any): Observable<any> {
    const index = this.mockPosts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockPosts[index] = { ...this.mockPosts[index], ...postData };
    }
    return of({ success: true });
  }

}

