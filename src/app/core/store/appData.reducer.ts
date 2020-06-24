import { createReducer, on, createSelector } from '@ngrx/store';

import { setProducts,setIngredients  } from './appData.actions';
import { AppData } from '../models/AppData';

export const appDataInitialState: AppData = {
  products: [],
  ingredients: []
};

// Populate data from the app to the whole app datq state
const _appDataReducer = createReducer(appDataInitialState,
  on( setProducts, (state, {products}) => ({ ...state, products: [...products]  })),
  on( setIngredients, (state, {ingredients}) => ({ ...state, ingredients: [...ingredients]  }))
 
);

export function appDataReducer(state, action) {
  return _appDataReducer(state, action);
}