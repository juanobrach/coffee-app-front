import { createAction, props } from '@ngrx/store';
import { Product } from '../models/Product';

export const setProducts =  createAction('[App Component] Set Product', props<{ products: Product[] }>());
export const setIngredients =  createAction('[App Component] Set Ingredients', props<{ ingredients: Product[] }>());


