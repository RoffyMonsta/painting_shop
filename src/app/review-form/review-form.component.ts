import { FormAnimation } from './review-form.animations';
import { AddReview } from './../shared/actions/reviews.actions';
import { Store, Select } from '@ngxs/store';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Painting } from '../shared/models/painting.model';
import { Review } from '../shared/models/review.model';
import { ReviewsService } from '../shared/services/reviews.service';
import { ReviewsState } from '../shared/state/reviews.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FormAnimation]
})
export class ReviewFormComponent implements OnInit, OnDestroy {
  form: FormGroup
  formState: string
  subscriptions: Subscription[] = []
  @Select(ReviewsState.getReviewsNextId) nextId$: Observable<number>

  constructor(private store:Store) {
  }
  getEmailErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.form.get('email')?.hasError('email')){
      return 'Not a valid email'
    }
    return ''
  }
  getNameErrorMessage() {
    if (this.form.get('name')?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.form.get('name')?.hasError('minlength')){
      return 'Your name is too short'
    }
    if(this.form.get('name')?.hasError('maxlength')){
      return 'Your name is too long'
    }
    return ''
  }
  getScoreErrorMessage() {
    if (this.form.get('score')?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.form.get('score')?.hasError('minlength')){
      return 'Your score is somehow too low'
    }
    if(this.form.get('score')?.hasError('maxlength')){
      return 'Your score is somehow too big'
    }
    return ''
  }
  getCommentErrorMessage() {
    if (this.form.get('comment')?.hasError('maxlength')) {
      return 'You comment is too big';
    }
    return ''
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      email : new FormControl('', [Validators.required, Validators.email]),
      name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      score : new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
      comment: new FormControl('',[Validators.maxLength(1000)]),
      productId: new FormControl()
    })
  }
  @Input()productId!: number

  submit(event: any){

    if(this.form) {
      this.formState='submitted'
      this.form.get('id')?.setValue(this.getLatestId())
      this.form.get('productId')?.setValue(this.productId)
      this.store.dispatch(new AddReview(this.form.value))
      event.currentTarget.reset()
      this.form.reset()
      this.form.markAsUntouched()
      this.form.markAsPristine()

    }

}
  getLatestId(): number{
    let nextId = 0
    this.subscriptions.push(
      this.nextId$.subscribe(id=>{
        nextId = id
      })
    )
    return nextId
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(sub=>sub.unsubscribe())
  }
}
