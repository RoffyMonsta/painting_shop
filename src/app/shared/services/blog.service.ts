
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { SharedModule } from '../shared.module';

@Injectable({providedIn: SharedModule})
export class BlogService {
  constructor(public http: HttpClient){

  }

  fetch() : Observable<Blog []>{
    return  this.http.get<Blog[]>('http://localhost:3000/blogs') }
}
