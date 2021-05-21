import { GetBlogsSuccess, GetBlogsFail, SelectBlog } from './../actions/blog.actions';


// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CategoriesService } from '../services/categories.service';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { GetBlogs } from '../actions/blog.actions';

// Section 2 We create a state model. This could include additional properties based on your needs.
export class BlogStateModel {
    blogs: Blog[];
    selectedBlog: number;
    loading: boolean;
    loaded: boolean
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<BlogStateModel>({
    name: 'blogs',
    defaults: {
      blogs: [],
      selectedBlog: null,
      loading: false,
      loaded: false
    }
})
@Injectable()
export class BlogState {
  constructor(private blogService: BlogService){}
  // Section 4
  @Selector()
  static getBlogs(state: BlogStateModel) {
      return state.blogs
  }
  @Selector()
  static getBlogById(state: BlogStateModel) {
    return state.blogs.find(p => p.id === state.selectedBlog)
  }
  @Selector()
  static getCurrentBlogId(state: BlogStateModel) {
    return state.selectedBlog
  }

 //Action to fetch categories from server
  @Action(GetBlogs)
  get({patchState, dispatch}: StateContext<BlogStateModel>){
    patchState({
      loading: true,
      loaded: false,
    });
    return this.blogService.fetch().subscribe(
      blogs => dispatch(new GetBlogsSuccess(blogs)),
      err => dispatch(new GetBlogsFail(err)),
    )
  }
  @Action(GetBlogsSuccess)
  getBlogsSuccess({patchState}: StateContext<BlogStateModel>, { payload }:GetBlogsSuccess) {
    patchState({
      loading: false,
      loaded: true,
      blogs:payload,
    });
  }

  @Action(GetBlogsFail)
  getBlogsFail({patchState}: StateContext<BlogStateModel>, { payload }:GetBlogsFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }

  // Action to select a category to view

  @Action(SelectBlog)
  select({patchState }: StateContext<BlogStateModel>, { payload }:SelectBlog) {
    patchState({
        selectedBlog: payload
    })
}
}
