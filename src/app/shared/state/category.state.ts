
import { GetCategories, GetCategoriesFail, GetCategoriesSuccess, SelectCategory } from './../actions/categories.actions';

// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Category } from '../models/category.model'
import { CategoriesService } from '../services/categories.service';
import { tap } from 'rxjs/operators';

// Section 2 We create a state model. This could include additional properties based on your needs.
export class CategoryStateModel {
    categories: Category[];
    selectedCategory: number;
    loading: boolean;
    loaded: boolean
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<CategoryStateModel>({
    name: 'categories',
    defaults: {
      categories: [],
      selectedCategory: null,
      loading: false,
      loaded: false
    }
})
@Injectable()
export class CategoryState {
  constructor(private cateroriesService: CategoriesService){}
  // Section 4
  @Selector()
  static getCategories(state: CategoryStateModel) {
      return state.categories
  }
  @Selector()
  static getCategoryById(state: CategoryStateModel) {
    return state.categories.find(p => p.id === state.selectedCategory)
  }


 //Action to fetch categories from server
  @Action(GetCategories)
  get({patchState, dispatch}: StateContext<CategoryStateModel>){
    patchState({
      loading: true,
      loaded: false,
    });
    return this.cateroriesService.fetch().subscribe(
      caregories => dispatch(new GetCategoriesSuccess(caregories)),
      err => dispatch(new GetCategoriesFail(err)),
    )
  }
  @Action(GetCategoriesSuccess)
  getCategoriesSuccess({patchState}: StateContext<CategoryStateModel>, { payload }:GetCategoriesSuccess) {
    patchState({
      loading: false,
      loaded: true,
      categories:payload,
    });
  }

  @Action(GetCategoriesFail)
  getCategoriesFail({patchState}: StateContext<CategoryStateModel>, { payload }:GetCategoriesFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }

  // Action to select a category to view

  @Action(SelectCategory)
  select({patchState }: StateContext<CategoryStateModel>, { payload }:SelectCategory) {
    patchState({
        selectedCategory: payload
    })
}
}
