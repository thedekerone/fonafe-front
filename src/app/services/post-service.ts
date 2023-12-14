import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../models/post';
import { Storage, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogEndpoint = environment.serverUrl + "/Blog/"
  constructor(private http: HttpClient) { }
  storage = inject(Storage)

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.blogEndpoint).pipe(
      map(posts => posts.sort((a, b) => {
        // Assuming 'date' is a field in your Post model and it's a Date or timestamp
        return new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
      }))
    );
  }

  async uploadImage(file: File) {
    const filePath = `test/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    const task = await  uploadBytes(fileRef, file);

    return task
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

