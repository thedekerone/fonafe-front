import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogEndpoint = environment.serverUrl + "/Blog/"
  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.blogEndpoint)
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<Post>(this.blogEndpoint + id)
  }

  createPost(post: Post) {
    return this.http.post<Post>(this.blogEndpoint, post)
  }

  updatePost(id: string, postData: Partial<Post>): Observable<boolean> {
    return this.http.put<boolean>(this.blogEndpoint + id, postData)
  }

  deletePost(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.blogEndpoint + id)
  }

}

