import { combineReducers } from 'redux';
import { ingredtientDetailsReducer } from './ingredient-details';
import { ingredientsReducer } from './ingredients-api';
export const rootReducer = combineReducers({
   ingredients: ingredientsReducer,
   ingredtientDetails: ingredtientDetailsReducer,
});