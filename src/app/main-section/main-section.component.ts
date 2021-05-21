import { BlogState } from './../shared/state/blog.state';

import { Title, Meta } from '@angular/platform-browser';
import { PaintingsState } from './../shared/state/paintings.state';


import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, timer, Observable } from 'rxjs';
import { Painting } from '../shared/models/painting.model';
import { PaintingsService } from '../shared/services/paintings.service';
import { Select, Store } from '@ngxs/store';
import { Blog } from '../shared/models/blog.model';
export interface Recipes{
  heading: string,
  img: string
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent implements OnInit, OnDestroy {

  recipesArr: Recipes[] = [
    {heading: 'Recipe 1', img: '../../assets/img/recipe1.jpg'},
    {heading: 'Recipe 2', img: '../../assets/img/recipe2.jpg'}
  ]

  @Select(PaintingsState.getBestSellersPaintings) bestSellers$: Observable<Painting[]>
  @Select(PaintingsState.getMostPopularPaintings) mostPopular$: Observable<Painting[]>
  @Select(PaintingsState.getTopRankedPaintings) topRanked$: Observable<Painting[]>
  @Select(BlogState.getBlogs) blogs$: Observable<Blog[]>
  subscriptions: Subscription[] = []
  substream$: Subject<Painting[]> = new Subject<Painting[]>()
  source$ = timer(0,2000);
  counter: number = 0
  paintingsArray: Painting[]
  paintingsSliceArray: Painting[]

  loading: boolean = false
  constructor(private store: Store, protected cd: ChangeDetectorRef, private title: Title, private meta: Meta) {
  }
  paintCarousel(){
    let tmp: number = 0
    this.subscriptions.push(
      this.source$
      .subscribe((val) =>{
        if(!(val%2))tmp=0
        if(val%2) tmp=3
        this.paintingsSliceArray= [this.paintingsArray[tmp], this.paintingsArray[1+tmp], this.paintingsArray[2+tmp]]
        this.cd.detectChanges();
      })
    )

    }
  ngOnInit(): void {
    this.subscriptions.push(
      this.bestSellers$.subscribe(paintings =>{
        this.paintingsArray = paintings
        this.cd.detectChanges();
      })
    )
    this.paintCarousel()

    this.title.setTitle('painting-shop')
    this.meta.removeTag('description')
  }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subscriptions.forEach(sub=>sub.unsubscribe)
}
}
