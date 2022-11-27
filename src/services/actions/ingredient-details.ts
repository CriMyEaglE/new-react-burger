import { TIngredient } from "../../components/utils/type";

export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export interface IGetIngredientDetails {
   readonly type: typeof GET_INGREDIENT_DETAILS,
   readonly payload: TIngredient
}

export interface IRemoveIngredientDetails {
   readonly type: typeof REMOVE_INGREDIENT_DETAILS
}

export type TIngredientDetails =
   | IGetIngredientDetails
   | IRemoveIngredientDetails

export const getIngredientDetails = (payload: TIngredient) => ({
   type: GET_INGREDIENT_DETAILS,
   payload
});

export const removeIngredientDetails = () => ({
   type: REMOVE_INGREDIENT_DETAILS,
});