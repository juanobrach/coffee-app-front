import { createAction, props } from '@ngrx/store';
import { Product } from '../models/Product';
import { Order } from '../models/Order';

export const addProduct =  createAction('[Selection Component] Add Product', props<{ product: Product }>());
export const setDrinkSize = createAction('[DrinkSize Component] Select Size', props<{ size: string }>());
export const setIngredientSelected = createAction('[ExtraIngredients Component] Select Ingredient', props<{ ingredient: Product }>());
