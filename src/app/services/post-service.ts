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

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(environment.serverUrl + "/Blog")
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<Post>(environment.serverUrl + "/Blog/" + id)
  }

  createPost(post :Post){
    return this.http.post<Post>(environment.serverUrl + "/Blog/", post )
  }

  /**updatePost(id: string, postData: any): Observable<any> {
    const index = this.mockPosts.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockPosts[index] = { ...this.mockPosts[index], ...postData };
    }
    return of({ success: true });
  }**/

}

