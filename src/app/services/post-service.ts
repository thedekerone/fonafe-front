import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.serverUrl + "/Blog")
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<Post>(environment.serverUrl + "/Blog/" + id)
  }

  createPost(post: Post) {
    return this.http.post<Post>(environment.serverUrl + "/Blog/", post)
  }

  updatePost(id: string, postData: Partial<Post>): Observable<any> {
    return this.http.put<Post>(environment.serverUrl + "/Blog/" + id, postData)
  }

}

