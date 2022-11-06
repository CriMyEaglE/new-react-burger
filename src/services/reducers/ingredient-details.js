import { GET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../actions/ingredient-details";

const ingredientDetailsState = {
   ingredientDetails: {}
}

export const ingredtientDetailsReducer = (state = ingredientDetailsState, action) => {
   switch (action.type) {
      case GET_INGREDIENT_DETAILS: {
         return {
            ...state,
            ingredientDetails: action.element
         };
      }
      case REMOVE_INGREDIENT_DETAILS: {
         return {
            ...state,
            ingredientDetails: {}
         };
      }
      default: {
         return state;
      }
   }
}