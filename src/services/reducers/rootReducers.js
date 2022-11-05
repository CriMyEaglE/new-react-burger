import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-api';
export const rootReducer = combineReducers({
   ingredients: ingredientsReducer
});