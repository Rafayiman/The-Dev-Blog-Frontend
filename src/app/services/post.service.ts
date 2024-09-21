import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/Update-Post.model';
import { AddPostRequest } from '../models/add-post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = 'https://localhost:7270';
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/api/Posts');
  }
  
  getPostById(id: string): Observable<Post> {
    
    return this.http.get<Post>(this.url + '/api/Posts/' + id);
  }

  updatePost(id: string|undefined , updatePostRequest: UpdatePostRequest): Observable<Post> {
  return this.http.put<Post>(this.url + '/api/Posts/' + id, updatePostRequest);
  
  }
  addPost(addPostRequest: AddPostRequest): Observable<Post> {
   return  this.http.post<Post>(this.url + '/api/Posts/', addPostRequest);
}
  deletePost(id: string | undefined): Observable<Post> {
   return  this.http.delete<Post>(this.url + '/api/Posts/' + id);
}
}