import { AddAnswer, SelectComment } from './../shared/actions/comment.actions';
import { Select, Store } from '@ngxs/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AddReview } from 'src/app/shared/actions/reviews.actions';
import { CommentState } from '../shared/state/comment.state';
import { AddComment } from '../shared/actions/comment.actions';
import { Comment } from '../shared/models/comment.model';
import { BlogState } from 'src/app/shared/state/blog.state';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentFormComponent implements OnInit {
  form: FormGroup
  formState: string
  subscriptions: Subscription[] = []
  parentComment: Comment
  @Select(CommentState.getCommentNextId) nextId$: Observable<number>
  @Select(CommentState.getAnswerNextId) answerNextId$: Observable<number>
  @Select(CommentState.getCommentById) parentComment$: Observable<Comment>
  @Select (BlogState.getCurrentBlogId) currentBlogId$: Observable<number>
  constructor(private store: Store) { }
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
    if(this.form.get('name')?.hasError('maxlength')){
      return 'Your name is too long'
    }
    return ''
  }
  getCommentErrorMessage() {
    if(this.form.get('comment')?.hasError('maxlength')){
      return 'Your comment is too long'
    }
    if (this.form.get('comment')?.hasError('required')) {
      return 'You must enter a value';
    }
    return 'unhandled'
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      name : new FormControl('',[Validators.required,Validators.maxLength(20)]),
      save: new FormControl(''),
      comment: new FormControl('',[Validators.maxLength(1000)]),
    })
    this.parentComment$.pipe(distinctUntilChanged())
      .subscribe(comment=>{
        this.parentComment = comment
      })
      console.log(this.parentComment)
  }
  submit(event: any){
    if(this.form.invalid) {
      return
    }
    if(this.parentComment){
      const comment: Comment = {
        id: this.getAnswerLatestId(),
        blogId: this.parentComment.blogId,
        name: this.form.get('name').value,
        email: this.form.get('email').value,
        save: this.form.get('save').value,
        comment: this.form.get('comment').value,
        date: new Date(),
      }
      this.parentComment.answers.push(comment)
      console.log(this.parentComment)
      this.formState='submitted'
      this.store.dispatch(new AddAnswer(this.parentComment))

    }
    else {
      let currentBlogId: number
      this.subscriptions.push(
        this.currentBlogId$.subscribe(id=>{
          currentBlogId = id
        })
      )
      const comment: Comment = {
        id: this.getLatestId(),
        blogId: currentBlogId,
        name: this.form.get('name').value,
        email: this.form.get('email').value,
        save: this.form.get('save').value,
        comment: this.form.get('comment').value,
        date: new Date(),
        answers: []
      }
      console.log(comment)
      this.formState='submitted'
      this.store.dispatch(new AddComment(comment))

    }
    event.currentTarget.reset()
    this.form.reset()
    this.form.markAsUntouched()
    this.form.markAsPristine()

}
  getLatestId(): number{
    let nextId: number
    this.subscriptions.push(
      this.nextId$.subscribe(id=>{
        nextId = id
      })
    )
    return nextId
  }
  getAnswerLatestId(): number{
    let nextId: number
    this.subscriptions.push(
      this.answerNextId$.subscribe(id=>{
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
  cancelAnswer(){
    this.store.dispatch(new SelectComment(null))
  }
}
