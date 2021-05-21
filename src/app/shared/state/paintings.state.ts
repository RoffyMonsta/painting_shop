import { CategoryState, CategoryStateModel } from './category.state';
import {GetPaintingsFail, GetPaintingsSuccess, SelectPainting } from './../actions/paintings.actions';
// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Painting } from '../models/painting.model'
import {GetPaintings} from '../actions/paintings.actions'
import {PaintingsService} from '../services/paintings.service'
import { tap } from 'rxjs/operators';
// Section 2 We create a state model. This could include additional properties based on your needs.
export interface PaintingsStateModel {
    paintings: Painting[]
    selectedPainting: number,
    loading: boolean,
    loaded: boolean
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<PaintingsStateModel>({
    name: 'paintings',
    defaults: {
      paintings: [],
      selectedPainting: null,
      loading: false,
      loaded: false
    }
})
@Injectable()
export class PaintingsState {

  // Selector to get all paintings
  @Selector()
  static getPaintings(state: PaintingsStateModel) {
      return state.paintings
  }

  // Selector to get list of best sellers
  @Selector()
  static getBestSellersPaintings(state: PaintingsStateModel)
  {
    //copy of massive ...
    return [...state.paintings].sort((a,b) => b.sales - a.sales)
  }

  // Selector to get list of most popular
  @Selector()
  static getMostPopularPaintings(state: PaintingsStateModel)
  {

    return [...state.paintings].sort((a,b) => b.views - a.views)
  }

  // Selector to get list of top ranked
  @Selector()
  static getTopRankedPaintings(state: PaintingsStateModel)
  {
    return [...state.paintings].sort((a,b) => a.rank - b.rank)
  }

  // Selector to get list of paintings by selected category
  @Selector([CategoryState])
  static getListByCategory(state: PaintingsStateModel, categoryState: CategoryStateModel){
    switch(categoryState.selectedCategory){
      case 2: {
        console.log('returning best sellers');
        return this.getBestSellersPaintings(state);
      }
      case 3: {
        console.log('returning most viewed');
        return this.getMostPopularPaintings(state);
      }
      case 4: {
        console.log('returning top ranked');
        return this.getTopRankedPaintings(state);
      }
      default: {
        return null;
      }
    }


  }

  //Selector to get painting by id
  @Selector()
  static getPaintingById(state: PaintingsStateModel) {

    return state.paintings.find(p => p.id === state.selectedPainting)
  }

  constructor(private paintingsService: PaintingsService){}

  //Action to fetch paintings
  @Action(GetPaintings)
  get({patchState, dispatch}: StateContext<PaintingsStateModel>){
    patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingsService.fetch().subscribe(
      paintings => dispatch(new GetPaintingsSuccess(paintings)),
      err => dispatch(new GetPaintingsFail(err)),
    )
  }
  @Action(GetPaintingsSuccess)
  getPaintingsSuccess({patchState}: StateContext<PaintingsStateModel>, { payload }:GetPaintingsSuccess) {
    patchState({
      loading: false,
      loaded: true,
      paintings:payload,
    });
  }

  @Action(GetPaintingsFail)
  getPaintingsFail({patchState}: StateContext<PaintingsStateModel>, { payload }:GetPaintingsFail) {
    patchState({
      loading: false,
      loaded: false,
    });
  }

  // Action to select painting in state
  @Action(SelectPainting)
  select({patchState }: StateContext<PaintingsStateModel>, { payload }:SelectPainting) {
    patchState({
        selectedPainting: payload
    })
}


}



