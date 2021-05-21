import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Review } from '../models/review.model';
import { SharedModule } from '../shared.module';

@Injectable({providedIn: SharedModule})
export class ReviewsService {

  constructor(public http: HttpClient) { }
  fetch() : Observable<Review []>{
    return  this.http.get<Review[]>('http://localhost:3000/reviews')
  }
  add(review: Review): Observable<Review>{
  return this.http.post<Review>('http://localhost:3000/reviews', review)
  }



}
