import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private mockPosts = [
    {
      id: '1',
      title: 'Exploring Angular: An In-Depth Look into Advanced Angular Techniques and Features',
      content: `Angular has become a cornerstone of modern web development, offering a robust framework for building dynamic and responsive applications. This article delves into advanced techniques and features of Angular, such as lazy loading, dynamic component loading, and the use of RxJS for state management. We also explore the latest updates in Angular, including improved testing capabilities and enhanced performance optimizations. By understanding these advanced concepts, developers can fully leverage Angular's power in their projects.`,
      img: 'angular-exploration.jpg',
      date: '2023-01-10',
      label: 'Technology'
    },
    {
      id: '2',
      title: 'The Future of Web Development: Predictions and Trends for the Next Decade in Web Tech',
      content: `The landscape of web development is continually evolving, and staying ahead of the curve is crucial for developers. This post examines the emerging trends and predictions for the next decade in web technology. We discuss the rise of AI and machine learning in web development, the increasing importance of cybersecurity, the evolution of Progressive Web Apps (PWAs), and the impact of new technologies like WebAssembly. Understanding these trends will be key to adapting and thriving in the future of web development.`,
      img: 'future-web.jpg',
      date: '2023-02-15',
      label: 'Analysis'
    },
    {
      id: '3',
      title: 'JavaScript Frameworks Comparison: A Comprehensive Guide to Choosing the Right Framework',
      content: `With the plethora of JavaScript frameworks available today, choosing the right one can be daunting. In this comprehensive guide, we compare popular frameworks like Angular, React, Vue.js, and others. We'll discuss their strengths, weaknesses, and ideal use cases. The article also covers considerations for scalability, ease of learning, community support, and integration capabilities. By the end of this guide, you'll have a clearer understanding of which framework aligns best with your project needs.`,
      img: 'js-frameworks.jpg',
      date: '2023-03-05',
      label: 'Education'
    },
    {
      id: '4',
      title: 'Optimizing Angular Performance: Expert Tips and Strategies for Speeding Up Your Angular Apps',
      content: `Performance is a critical aspect of any Angular application. This article provides expert tips and strategies for optimizing Angular app performance. We cover topics like efficient change detection, lazy loading modules, optimizing network requests, and leveraging Angular's built-in performance tools. Additionally, we'll discuss best practices for writing clean, performant code and how to use profiling tools to identify and fix performance bottlenecks. Implementing these strategies will help ensure your Angular apps are fast and efficient.`,
      img: 'optimize-angular.jpg',
      date: '2023-04-20',
      label: 'Optimization'
    }
  ];

  constructor(private http: HttpClient) { }

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(environment.serverUrl + "/Blog")
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

