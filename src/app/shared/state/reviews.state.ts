import { PaintingsState, PaintingsStateModel } from './paintings.state';
import { AddReviewFail, AddReviewSuccess, GetReviews, GetReviewsFail, GetReviewsSuccess } from './../actions/reviews.actions';
import { ReviewsService } from './../services/reviews.service';
import { Review } from '../models/review.model';
// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddReview, RemoveReview } from '../actions/reviews.actions'
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';

// Section 2 We create a state model. This could include additional properties based on your needs.
export class ReviewsStateModel {
    loading: boolean;
    loaded: boolean;
    reviews!: Review[];
    reviewsDict: {[key:number]: Review[]}[];
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<ReviewsStateModel>({
    name: 'reviews',
    defaults: {
        loading: false,
        loaded: false,
        reviews: [],
        reviewsDict: []
    }
})
@Injectable()
export class ReviewsState {
  constructor(private reviewsService: ReviewsService) {}
  // Selector to return all reviews
  @Selector()
  static getReviews(state: ReviewsStateModel) {
      return state.reviews
  }

  // Selector to return reviews only for one product
  @Selector([PaintingsState])
  static getReviewsByProduct(state: ReviewsStateModel, statePaintings: PaintingsStateModel):Review[]{
    return state.reviews.filter(p => p.productId === statePaintings.selectedPainting)

  }
  // Selector to get id of next review
  @Selector()
  static getReviewsNextId(state: ReviewsStateModel):number{
    return state.reviews[state.reviews.length-1].id + 1
  }

  //Selector to calculate rating of a product
  @Selector([PaintingsState])
  static getRating(state: ReviewsStateModel, statePaintings: PaintingsStateModel):Array<number>{
    let tmpArr: Review[]
    let sumOfRatings: number = 0
    let ArrayRating: Array<number> = []
    tmpArr = this.getReviewsByProduct(state, statePaintings)
    tmpArr.forEach(a=>sumOfRatings+=a.score)
    let rating = Math.round(sumOfRatings/tmpArr.length)
    if(isNaN(rating))rating=0
    ArrayRating = Array(rating).fill(1)
    return ArrayRating
  }

  // Action to create a new review
  @Action(AddReview)
  add({patchState, dispatch }: StateContext<ReviewsStateModel>, { payload }: AddReview) {
      patchState({
        loading: true,
        loaded: false,
      });
      return this.reviewsService.add(payload).subscribe(
        review => dispatch(new AddReviewSuccess(review)),
        err => dispatch(new AddReviewFail(err)),
      )
  }

  @Action(AddReviewSuccess)
  addReviewSuccess({getState, patchState}: StateContext<ReviewsStateModel>, { payload }:AddReviewSuccess) {
    patchState({
      loading: false,
      loaded: true,
      reviews: [...getState().reviews, payload],
    });
  }

  @Action(AddReviewFail)
  addReviewFail({getState, patchState}: StateContext<ReviewsStateModel>, { payload }:AddReviewFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }

  // Action to remove a review
  @Action(RemoveReview)
  remove({getState, patchState }: StateContext<ReviewsStateModel>, { payload }:RemoveReview) {
      patchState({
          reviews: getState().reviews.filter(a => a.id != +payload)
      })
  }

  //Action to fetch reviews from server

  @Action(GetReviews)
  get({patchState, dispatch}: StateContext<ReviewsStateModel>){
    patchState({
      loading: true,
      loaded: false,
    });
    return this.reviewsService.fetch().subscribe(
      reviews => dispatch(new GetReviewsSuccess(reviews)),
      err => dispatch(new GetReviewsFail(err)),
    )
  }
  @Action(GetReviewsSuccess)
  getReviewsSuccess({patchState}: StateContext<ReviewsStateModel>, { payload }:GetReviewsSuccess) {
    patchState({
      loading: false,
      loaded: true,
      reviews:payload,
    });
  }

  @Action(GetReviewsFail)
  getReviewsFail({patchState}: StateContext<ReviewsStateModel>, { payload }:GetReviewsFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }
}
