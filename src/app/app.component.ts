import { GetBlogs } from './shared/actions/blog.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetCategories } from './shared/actions/categories.actions';
import { GetPaintings } from './shared/actions/paintings.actions';
import { GetReviews } from './shared/actions/reviews.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
title = 'painting-shop'
billingPage = false
constructor(private store: Store, private route: ActivatedRoute){
}
ngOnInit(){
  this.store.dispatch(new GetPaintings());
  this.store.dispatch(new GetCategories())
  this.store.dispatch(new GetReviews())
  this.store.dispatch(new GetBlogs())
}
}
