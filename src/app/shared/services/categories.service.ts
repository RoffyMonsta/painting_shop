
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { SharedModule } from '../shared.module';

@Injectable({providedIn: SharedModule})
export class CategoriesService {
  constructor(public http: HttpClient){

  }

  fetch() : Observable<Category []>{
    return  this.http.get<Category[]>('http://localhost:3000/categories') }
}
