import { TBurgerConstructor } from "./burger-constructor";
import { TForgotPassword } from "./forgot-password";
import { TIngredientDetails } from "./ingredient-details";
import { TIngredients } from "./ingredients-api";
import { TLogin } from "./login";
import { TOrder } from "./order-details";
import { TProfile } from "./profile";
import { TRegistrationUser } from "./registration";
import { TResetPassword } from "./reset-password";

export type TBunch =
   | TBurgerConstructor
   | TIngredientDetails
   | TIngredients
   | TOrder
   | TForgotPassword
   | TLogin
   | TProfile
   | TRegistrationUser
   | TResetPassword