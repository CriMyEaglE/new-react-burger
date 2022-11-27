import { TIngredient } from '../../components/utils/type';
import {
   GET_INGREDIENTS_FAILED,
   GET_INGREDIENTS_REQUEST,
   GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients-api';
import { TBunch } from '../actions/rootActions';

type TInitialState = {
   ingredients: [] | Array<TIngredient>,
   ingredientsRequest: boolean,
   ingredientsFailed: boolean
}

const initialState = {
   ingredients: [],
   ingredientsRequest: false,
   ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action: TBunch): TInitialState => {
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
            ingredients: action.payload,
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