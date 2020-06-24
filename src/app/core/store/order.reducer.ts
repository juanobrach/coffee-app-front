import { createReducer, on, createSelector } from '@ngrx/store';

import { addProduct, setDrinkSize, setIngredientSelected } from './order.actions';
import { Product } from '../models/Product';
import { Order } from '../models/Order';

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
    // Be carefoul with the new order total since it is calculated based on the extra ingredients
    const productRegularPrice = state.product.price;
    const newProductPrice =  ( size === 'regular' ? productRegularPrice : productRegularPrice * 2 );
    const oldProductPrice = (state.size === 'regular' ? productRegularPrice : productRegularPrice * 2 );
    const total = (state.total - oldProductPrice ) + newProductPrice;

    return({ ...state,  size, total });
  }),
  on( setIngredientSelected, ( state, {ingredient} ) => {

    // Double click, ok. Remove it from the selected ingredients
    // Updated total based on the amount of ingredients
    if ( state.extras.includes( ingredient.id )){
      const ingredientIndex  =  state.extras.findIndex( ingredientSelected => ingredientSelected === ingredient.id );
      const updatedIngredientsSelected =   [
        ...state.extras.slice(0, ingredientIndex),
        ...state.extras.slice(  ingredientIndex + 1 )
      ];


      return({ ...state, total: state.total - ingredient.price , extras: updatedIngredientsSelected })

    }else{
      const updatedIngredientsSelected = [ ...state.extras, ingredient.id];
      return({ ...state, total: state.total + ingredient.price , extras: updatedIngredientsSelected })
    }
  }),  
);

export function orderReducer(state, action) {
  return _orderReducer(state, action);
}