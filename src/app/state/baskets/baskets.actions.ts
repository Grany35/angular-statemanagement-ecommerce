import { createAction, props } from '@ngrx/store';
import { BasketModel } from './../../models/baskets.model';

export const addBasket = createAction(
    "[Basket] Add Basket",
    props<{"basket":BasketModel}>()
);
