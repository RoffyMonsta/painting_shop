import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { Review } from '../shared/models/review.model';
import { ReviewsState } from '../shared/state/reviews.state';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserReviewComponent implements OnInit {

  @Select(ReviewsState.getReviews) reviews$: Observable<Review[]>;
  error: string = ''
  cellsToShow: number = 3
  loading: boolean = false

  constructor() {

  }

  ngOnInit(): void {
  }
  options: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    spaceBetween:8,
    centerInsufficientSlides: true,
    breakpoints: {
      959: {
        slidesPerView: 3
      },
      599: {
        slidesPerView: 2
      }
    }
  }
  onClick(msg: string){
    console.log(`redirecting to: ${msg}`)

  }
  trackById(index: any, object: any){
    return object.id
  }

}
