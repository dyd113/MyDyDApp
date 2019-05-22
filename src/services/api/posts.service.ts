import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllPosts() {
    const endPoint = 'posts';
    return this.http.get(`${this.url}/${endPoint}`);
  }
  getAllComments(postId) {
    const endPoint = 'posts';
    const endPointC = 'comments';
    return this.http.get(`${this.url}/${endPoint}/${postId}/${endPointC}?postId=${postId}`);
  }
}
