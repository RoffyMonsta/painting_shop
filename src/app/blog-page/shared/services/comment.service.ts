import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentService {

  constructor(public http: HttpClient) { }
  fetch() : Observable<Comment []>{
    return  this.http.get<Comment[]>('http://localhost:3000/comments')
  }
  add(comment: Comment): Observable<Comment>{
  return this.http.post<Comment>('http://localhost:3000/comments', comment)
  }

  addAnswer(comment: Comment): Observable<Comment>{
    return this.http.patch<Comment>(`http://localhost:3000/comments/${comment.id}`, comment)
  }

}
