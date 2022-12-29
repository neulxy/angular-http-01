import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  apiURL =
    'https://ng-complete-guide-3d267-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(this.apiURL, postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {}
}
