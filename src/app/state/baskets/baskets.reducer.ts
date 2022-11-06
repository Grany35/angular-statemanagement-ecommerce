import { createReducer, on, createAction } from '@ngrx/store';

export const BasketsReducer = createReducer(
  0,
  on(createAction('[Baskets] Count'), (state) => (state += 1))
);
