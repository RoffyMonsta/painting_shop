import { UpdateAmount } from './../actions/basket.actions';
// Section 1 These are our imports, which include importing various functions from ngrx store. We'll use these shortly.
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Painting } from '../models/painting.model'
import { AddBasket, RemoveBasket } from '../actions/basket.actions'
import { Injectable } from '@angular/core';

// Section 2 We create a state model. This could include additional properties based on your needs.
export interface BasketStateModel {
    basketPaintings: Painting[]
}

// Section 3 We use the state decorator to define a name and default values based on the state model.
@State<BasketStateModel>({
    name: 'basketPaintings',
    defaults: {
        basketPaintings: []
    }
})
@Injectable()
export class BasketState {

  // Section 4
  @Selector()
  static getBasketPaintings(state: BasketStateModel) {
      return state.basketPaintings
  }

  @Selector()
  static getTotalCostOfPaintings(state: BasketStateModel){
    let cost: number = null
    for (const painting of [...state.basketPaintings]){

      cost += painting.price * painting.basketCount
    }

    return cost
  }

  // Section 5
  @Action(AddBasket)
  add({getState, patchState }: StateContext<BasketStateModel>, { payload }:AddBasket) {
      const state = getState();
      patchState({
          basketPaintings: [...state.basketPaintings, payload]
      })
  }

  @Action(RemoveBasket)
  remove({getState, patchState }: StateContext<BasketStateModel>, { payload }:RemoveBasket) {
      patchState({
          basketPaintings: getState().basketPaintings.filter(a => a.id != +payload)
      })
  }


  @Action(UpdateAmount)
  update({getState, patchState }: StateContext<BasketStateModel>, { id, payload }:UpdateAmount) {
      let arr = [...getState().basketPaintings]
      arr[arr.findIndex(p=>p.id == id)].basketCount = payload
      patchState({
          basketPaintings: arr
      })
  }
}
