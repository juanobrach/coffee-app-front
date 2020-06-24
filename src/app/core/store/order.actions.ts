import { createAction, props } from '@ngrx/store';
import { Product } from '../models/Product';

export const addProduct =  createAction('[Counter Component] Add Product', props<{ product: Product }>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');