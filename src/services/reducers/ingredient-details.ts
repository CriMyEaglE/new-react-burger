import { TIngredient } from "../../utils/type";
import { GET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../actions/ingredient-details";
import { TApplicationActions } from "../actions/rootActions";

type TInitialState = {
   ingredientDetails: {
      _id?: string,
      carbohydrates?: string,
      fat?: string,
      proteins?: string,
      calories?: string
      name?: string,
      image?: string
   } | TIngredient
}

const ingredientDetailsState = {
   ingredientDetails: {}
}

export const ingredtientDetailsReducer = (state = ingredientDetailsState, action: TApplicationActions): TInitialState => {
   switch (action.type) {
      case GET_INGREDIENT_DETAILS: {
         return {
            ...state,
            ingredientDetails: action.payload
         };
         console.log(state)
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