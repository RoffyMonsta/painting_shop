import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Painting } from '../models/painting.model';
import { SharedModule } from '../shared.module';
@Injectable({providedIn: SharedModule})
export class PaintingsService {

  constructor(private http: HttpClient) {}

  fetch() : Observable<Painting []>{
    return  this.http.get<Painting[]>('http://localhost:3000/paintings')
  }

}
