import { TBurgerConstructorActions } from "./burger-constructor";
import { TForgotPasswordActions } from "./forgot-password";
import { TIngredientDetailsActions } from "./ingredient-details";
import { TIngredientsActions } from "./ingredients-api";
import { TLoginActions } from "./login";
import { TOrderActions } from "./order-details";
import { TProfileActions } from "./profile";
import { TRegistrationUserActions } from "./registration";
import { TResetPasswordActions } from "./reset-password";
import { IWsActions, TWsActions } from "./websocket-all-orders";
import { IWsProfileActions, TWsProfileActions } from "./websocket-profile-orders";

export type TApplicationActions =
   | TBurgerConstructorActions
   | TIngredientDetailsActions
   | TIngredientsActions
   | TOrderActions
   | TForgotPasswordActions
   | TLoginActions
   | TProfileActions
   | TRegistrationUserActions
   | TResetPasswordActions
   | TWsActions
   | TWsProfileActions

export type TMiddlewareActions =
   | IWsActions
   | IWsProfileActions