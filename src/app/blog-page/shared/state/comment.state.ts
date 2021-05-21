
import { Comment } from '../models/comment.model';
// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { CommentService } from '../services/comment.service';
import { BlogState, BlogStateModel } from 'src/app/shared/state/blog.state';
import { AddAnswer, AddAnswerFail, AddAnswerSuccess, AddComment, AddCommentFail, AddCommentSuccess, GetComments, GetCommentsFail, GetCommentsSuccess, RemoveComment, SelectComment } from '../actions/comment.actions';

// Section 2 We create a state model. This could include additional properties based on your needs.
export class CommentStateModel {
    loading: boolean;
    loaded: boolean;
    comments: Comment[];
    selectedComment: number;
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<CommentStateModel>({
    name: 'comments',
    defaults: {
        loading: false,
        loaded: false,
        comments: [],
        selectedComment: null
    }
})
@Injectable()
export class CommentState {
  constructor(private commentService: CommentService) {}
  // Selector to return all comments
  @Selector()
  static getComments(state: CommentStateModel) {
      return state.comments
  }

  // Selector to return comments only for one blog

  @Selector([BlogState])
  static getCommentsByProduct(state: CommentStateModel, stateBlog: BlogStateModel):Comment[]{
    return state.comments.filter(p => p.blogId === stateBlog.selectedBlog)
  }

  //Selector to get comment by id

  @Selector()
  static getCommentById(state: CommentStateModel) {
    return state.comments.find(p => p.id === state.selectedComment)
  }
  // Selector to get id of next comment

  @Selector()
  static getCommentNextId(state: CommentStateModel):number{
    return state.comments[state.comments.length-1].id + 1
  }
  @Selector()
  static getAnswerNextId(state: CommentStateModel):number{
    let comment =  this.getCommentById(state)
    if(!comment.answers.length)return 1
    return comment.answers[comment.answers.length-1].id+1
  }

  // Action to create a new comment
  @Action(AddComment)
  add({patchState, dispatch }: StateContext<CommentStateModel>, { payload }: AddComment) {
      patchState({
        loading: true,
        loaded: false,
      });
      return this.commentService.add(payload).subscribe(
        comment => dispatch(new AddCommentSuccess(comment)),
        err => dispatch(new AddCommentFail(err)),
      )
  }

  @Action(AddCommentSuccess)
  addCommentSuccess({getState, patchState}: StateContext<CommentStateModel>, { payload }:AddCommentSuccess) {
    patchState({
      loading: false,
      loaded: true,
      comments: [...getState().comments, payload],
    });
  }

  @Action(AddCommentFail)
  addCommentFail({patchState}: StateContext<CommentStateModel>, { payload }:AddCommentFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }

  // Action to remove a comment

  @Action(RemoveComment)
  remove({getState, patchState }: StateContext<CommentStateModel>, { payload }:RemoveComment) {
      patchState({
          comments: getState().comments.filter(a => a.id != +payload)
      })
  }

  //Action to fetch comments from server

  @Action(GetComments)
  get({patchState, dispatch}: StateContext<CommentStateModel>){
    patchState({
      loading: true,
      loaded: false,
    });
    return this.commentService.fetch().subscribe(
      comments => dispatch(new GetCommentsSuccess(comments)),
      err => dispatch(new GetCommentsFail(err)),
    )
  }
  @Action(GetCommentsSuccess)
  getCommentsSuccess({patchState}: StateContext<CommentStateModel>, { payload }:GetCommentsSuccess) {
    patchState({
      loading: false,
      loaded: true,
      comments:payload,
    });
  }

  @Action(GetCommentsFail)
  getCommentsFail({patchState}: StateContext<CommentStateModel>, { payload }:GetCommentsFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }
  @Action(SelectComment)
  select({patchState }: StateContext<CommentStateModel>, { payload }:SelectComment) {
    patchState({
        selectedComment: payload
    })
}

@Action(AddAnswer)
  addAnswer({patchState, dispatch }: StateContext<CommentStateModel>, { payload }: AddAnswer) {
      patchState({
        loading: true,
        loaded: false,
      });
      return this.commentService.addAnswer(payload).subscribe(
        comment => dispatch(new AddAnswerSuccess(comment)),
        err => dispatch(new AddAnswerFail(err)),
      )
  }

  @Action(AddAnswerSuccess)
  addAnswerSuccess({patchState}: StateContext<CommentStateModel>, { payload }:AddAnswerSuccess) {
    patchState({
      loading: false,
      loaded: true,
      selectedComment: null
    });
  }

  @Action(AddAnswerFail)
  addAnswerFail({patchState}: StateContext<CommentStateModel>, { payload }:AddAnswerFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }
}

