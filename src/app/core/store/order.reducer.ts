import { createReducer, on, createSelector } from '@ngrx/store';

import { addProduct, setDrinkSize } from './order.actions';
import { Product } from '../models/Product';
import { Order } from '../models/Order';
import { state } from '@angular/animations';

export const initialState: Order = {
  product: {} as Product,
  size: 'regular',
  extras: [],
  total: 0,
};

// addProduct has as default the regular price since the use could choice the drink size after the selecttion of the drink type.
const _orderReducer = createReducer(initialState,
  on( addProduct, (state, {product}) => ({ ...state, product: { ...product}, total: product.price })),
  on( setDrinkSize, (state, {size} ) => {
    // Change the total of the order based on the selected size of the drink
    const productPrice = state.product.price;
    const total = ( size === 'regular' ? productPrice : productPrice * 2 );
    return({ ...state,  size, total })
  })
);

export function orderReducer(state, action) {
  return _orderReducer(state, action);
}