import { Injectable } from '@angular/core';
import { Blog } from '../domain/blog.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'api/blogs/blogs.json'
  constructor(private http: HttpClient) {

  }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl).pipe(
      tap(data => console.log('> tag', data)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.log('> errorMessage', errorMessage);
    return throwError(errorMessage);
  }
}
