import {
   GET_INGREDIENTS_FAILED,
   GET_INGREDIENTS_REQUEST,
   GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients-api';

const initialState = {
   ingredients: [],
   ingredientsRequest: false,
   ingredientsFailed: false,

   burgerIngredientsList: [],
};

export const ingredientsReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
         return {
            ...state,
            ingredientsRequest: true
         };
      }
      case GET_INGREDIENTS_SUCCESS: {
         return {
            ...state,
            ingredientsFailed: false,
            ingredients: action.items,
            ingredientsRequest: false
         };
      }
      case GET_INGREDIENTS_FAILED: {
         return { ...state, ingredientsFailed: true, ingredientsRequest: false };
      }
      default: {
         return state;
      }
   }
};