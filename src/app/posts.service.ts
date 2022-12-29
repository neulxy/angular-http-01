import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  apiURL =
    'https://ng-complete-guide-3d267-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    return this.http.post<{ name: string }>(this.apiURL, postData);
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<{ [key: string]: Post }>(this.apiURL).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

  clearPosts() {
    return this.http.delete(this.apiURL);
  }
}
