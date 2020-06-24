import { createReducer, on, createSelector } from '@ngrx/store';

import { addProduct } from './order.actions';
import { Product } from '../models/Product';

export interface State {
  product: Product;
  extras: [];
  total: number;
}

export const initialState: State = {
  product: {} as Product,
  extras: [],
  total: 0,
};

const _orderReducer = createReducer(initialState,
  on( addProduct, (state, {product}) => ({ ...state, product: { ...product}}))
);

export function orderReducer(state, action) {
  return _orderReducer(state, action);
}