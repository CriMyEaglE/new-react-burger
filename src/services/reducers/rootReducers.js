import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constructor';
import { restorePasswordReducer } from './forgot-password';
import { ingredtientDetailsReducer } from './ingredient-details';
import { ingredientsReducer } from './ingredients-api';
import { loginUserReducer } from './login';
import { orderDetailsReducer } from './order-details';
import { getUserProfileReducer } from './profile';
import { registrationUserReducer } from './registration';
import { resetPasswordReducer } from './reset-password';
export const rootReducer = combineReducers({
   ingredients: ingredientsReducer,
   ingredientDetails: ingredtientDetailsReducer,
   constructorList: constructorReducer,
   orderDetails: orderDetailsReducer,
   restorePassword: restorePasswordReducer,
   resetPassword: resetPasswordReducer,
   registrationUser: registrationUserReducer,
   loginUser: loginUserReducer,
   userProfile: getUserProfileReducer
});