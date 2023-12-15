import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, of, take } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../models/post';
import { Storage, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  blogEndpoint = environment.serverUrl + '/Blog/';
  private posts = new BehaviorSubject<Post[]>([]);
  private postsLoaded = false;

  constructor(private http: HttpClient) {}
  storage = inject(Storage);

  getAllPosts(forceReload = false): Observable<Post[]> {
    if (!this.postsLoaded || forceReload) {
      this.http
        .get<Post[]>(this.blogEndpoint)
        .pipe(
          map(posts => posts.sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())),
          take(1) // Take only one value from the stream and complete
        )
        .subscribe(posts => {
          this.posts.next(posts);
          this.postsLoaded = true;
        });
    }
    return this.posts.asObservable();
  }

  async uploadImage(file: File) {
    const filePath = `test/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    const task = await uploadBytes(fileRef, file);

    return task;
  }
  getPostById(id: string): Observable<Post | undefined> {
    if (this.postsLoaded) return this.getAllPosts().pipe(map(posts => posts.find(post => post.id === id)));

    return this.http.get<Post>(this.blogEndpoint + id);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.blogEndpoint, post).pipe(
      map(newPost => {
        const currentPosts = this.posts.getValue();
        this.posts.next([...currentPosts, newPost]);
        return newPost;
      })
    );
  }

  updatePost(id: string, postData: Partial<Post>): Observable<boolean> {
    return this.http.put<boolean>(this.blogEndpoint + id, postData).pipe(
      map(success => {
        if (success) {
          const updatedPosts = this.posts.getValue().map(post => (post.id === id ? { ...post, ...postData } : post));
          this.posts.next(updatedPosts);
        }
        return success;
      })
    );
  }

  deletePost(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.blogEndpoint + id).pipe(
      map(success => {
        if (success) {
          const filteredPosts = this.posts.getValue().filter(post => post.id !== id);
          this.posts.next(filteredPosts);
        }
        return success;
      })
    );
  }
}
