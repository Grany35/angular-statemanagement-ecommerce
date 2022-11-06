import { createReducer, on, createAction, props } from '@ngrx/store';
import { BasketModel } from './../../models/baskets.model';
import * as BasketActions from './baskets.actions';


export const initialState: BasketModel[] = [];

export const BasketsReducer = createReducer(
  initialState,
  on(
    BasketActions.addBasket,
    (state, { basket }) => {
      return [...state, basket];
    }
  )
);
