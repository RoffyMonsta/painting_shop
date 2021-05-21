import { CategoryState } from './../shared/state/category.state';
import { SelectCategory } from './../shared/actions/categories.actions';
import { Select, Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent implements OnInit{
  @Input() val: number
  @Select(CategoryState.getCategories) categories$: Observable<Category[]>
  constructor() {
  }
  onClick(option: string){
    console.log(option)
  }
  ngOnInit(): void {
  }
}

