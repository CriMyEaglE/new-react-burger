import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constructor';
import { restorePasswordReducer } from './forgot-password';
import { ingredtientDetailsReducer } from './ingredient-details';
import { ingredientsReducer } from './ingredients-api';
import { loginUserReducer } from './login';
import { orderDetailsReducer } from './order-details';
import { registerUserReducer } from './register';
import { resetPasswordReducer } from './reset-password';
import { getUserReducer } from './user';
export const rootReducer = combineReducers({
   ingredients: ingredientsReducer,
   ingredtientDetails: ingredtientDetailsReducer,
   constructorList: constructorReducer,
   orderDetails: orderDetailsReducer,
   restorePassword: restorePasswordReducer,
   resetPassword: resetPasswordReducer,
   login: loginUserReducer,
   registerUser: registerUserReducer,
   user: getUserReducer

});