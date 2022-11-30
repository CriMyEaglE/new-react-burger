import { BASE_URL } from "../../utils/constants";
import { checkResponse } from "../../utils/api";
import { TApi, TDispatch, TIngredient } from "../../utils/type";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsRequest {
   readonly type: typeof GET_INGREDIENTS_REQUEST
}
export interface IGetIngredientsSuccess {
   readonly type: typeof GET_INGREDIENTS_SUCCESS,
   readonly payload: Array<TIngredient>
}
export interface IGetIngredientsFailed {
   readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TIngredientsActions =
   | IGetIngredientsRequest
   | IGetIngredientsSuccess
   | IGetIngredientsFailed

export const getIngredients: TApi = () => {
   return function (dispatch: TDispatch) {
      dispatch({
         type: GET_INGREDIENTS_REQUEST
      });
      fetch(`${BASE_URL}/ingredients`)
         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: GET_INGREDIENTS_SUCCESS,
                  payload: res.data
               });
            } else {
               dispatch({
                  type: GET_INGREDIENTS_FAILED
               });
            }
         })
         .catch(console.warn);
   };
}
