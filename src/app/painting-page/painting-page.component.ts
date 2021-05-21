import { FadeShow, SlideContent } from './painting-page.animations';
import { UpdateAmount } from './../shared/actions/basket.actions';
import { Title, Meta } from '@angular/platform-browser';
import { SelectPainting } from './../shared/actions/paintings.actions';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Painting } from '../shared/models/painting.model';
import { Select, Store } from '@ngxs/store';
import { AddBasket, RemoveBasket } from '../shared/actions/basket.actions';
import { Review } from '../shared/models/review.model';
import { Observable, Subscription } from 'rxjs';
import { ReviewsState, ReviewsStateModel } from '../shared/state/reviews.state';
import { PaintingsState } from '../shared/state/paintings.state';
import { FormControl, Validators } from '@angular/forms';
import { map, distinctUntilChanged  } from 'rxjs/operators';

@Component({
  selector: 'app-painting-page',
  templateUrl: './painting-page.component.html',
  styleUrls: ['./painting-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FadeShow, SlideContent]
})
export class PaintingPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []
  navselected: number = 1
  painting: any
  pageEvent: any
  descriptionShow = true
  reviewsShow = false
  addShow = false
  error = false
  reviewsOnPage: number
  reviews: Review[]
  reviewsToShow: Review[]
  @Select(ReviewsState.getRating) reviewRating$: Observable<Array<number>>;
  @Select(PaintingsState.getPaintingById) painting$: Observable<Painting>
  @Select(ReviewsState.getReviewsByProduct) reviews$: Observable<Review[]>
  @Select(PaintingsState.getMostPopularPaintings) mostPopular$: Observable<Painting[]>
  paintingId$: Observable<number>
  constructor(private route: ActivatedRoute,  private store: Store, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
      this.route.params?.subscribe((params)=>{
        this.store.dispatch(new SelectPainting(+params.id))
        })
      this.fetchPainting()
      this.fetchReviews()
      this.title.setTitle(this.painting?.title)
      this.meta.addTag({
      description: `This picture is called "${this.painting?.title}". It was made in ${this.painting?.year} by ${this.painting?.author}`
    })
    this.paintingId$= this.painting$.pipe(map(painting => painting?.id),
    distinctUntilChanged()
    )
  }
  getEmpty(rating: Array<number>){
    return Array(5-rating.length).fill(1)
  }
  onPageChange($event: any) {
    this.reviewsToShow =  this.reviews.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  fetchPainting(){
    this.subscriptions.push(
      this.painting$.subscribe(painting=>{
        this.painting = painting
      })
    )

  }
  fetchReviews(){
    this.subscriptions.push(
      this.reviews$.subscribe(reviews=>{
        this.reviews = reviews?.reverse()
        if(this.reviews?.length < 3)this.reviewsOnPage = this.reviews?.length
        else this.reviewsOnPage = 3
        this.reviewsToShow =  this.reviews?.slice(0,this.reviewsOnPage);
      })

    )

  }
  amountFormControl = new FormControl('1', [
    Validators.min(1),
    Validators.max(10),
    Validators.required
  ]);



  AddBasket(){
    if (this.amountFormControl.hasError('min') || this.amountFormControl.hasError('max') || this.amountFormControl.hasError('required')){
      this.error = true
      return;
    }
    this.error = false
    this.painting.basketCount = this.amountFormControl.value
    this.painting.available = false
    this.amountFormControl.reset()
    this.store.dispatch(new AddBasket(this.painting))
  }

  RemoveBasket() {
    this.painting.available = true
    this.error = false
    this.painting.basketCount = 1
    this.store.dispatch(new RemoveBasket(this.painting.id.toString()))
  }

  ChangeAmountBasket(){
    if (this.amountFormControl.hasError('min') || this.amountFormControl.hasError('max') || this.amountFormControl.hasError('required')){
      this.error = true
      return;
    }
    this.error = false
    this.painting.basketCount = this.amountFormControl.value

    this.amountFormControl.reset()
    this.store.dispatch(new UpdateAmount(this.painting.id, this.painting.basketCount))
  }

  switchActive(option: number){
    if(this.navselected === option){return;}
    this.navselected = option
    if(option===1){
      this.descriptionShow = true
      this.reviewsShow = false
      this.addShow = false
    }
    if(option===2){
      this.descriptionShow = false
      this.reviewsShow = true
      this.addShow = false
    }
    if(option===3){
      this.descriptionShow = false
      this.reviewsShow = false
      this.addShow = true
    }
  }
ngOnDestroy(): void {
  this.subscriptions.forEach(subscription=>subscription.unsubscribe())
}
}
