import { createReducer, on, createSelector } from '@ngrx/store';

import { addProduct, setDrinkSize } from './order.actions';
import { Product } from '../models/Product';

export interface State {
  product: Product;
  size: string;
  extras: [];
  total: number;
}

export const initialState: State = {
  product: {} as Product,
  size: '',
  extras: [],
  total: 0,
};

const _orderReducer = createReducer(initialState,
  on( addProduct, (state, {product}) => ({ ...state, product: { ...product}})),
  on( setDrinkSize, (state, {size}) => ({ ...state, ...size }))
);

export function orderReducer(state, action) {
  return _orderReducer(state, action);
}