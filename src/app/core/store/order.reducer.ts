import { createReducer, on, createSelector } from '@ngrx/store';

import { addProduct, setDrinkSize } from './order.actions';
import { Product } from '../models/Product';
import { Order } from '../models/Order';

export const initialState: Order = {
  product: {} as Product,
  size: '',
  extras: [],
  total: 0,
};

const _orderReducer = createReducer(initialState,
  on( addProduct, (state, {product}) => ({ ...state, product: { ...product}})),
  on( setDrinkSize, (state, {size} ) => ({ ...state,  size }))
);

export function orderReducer(state, action) {
  return _orderReducer(state, action);
}