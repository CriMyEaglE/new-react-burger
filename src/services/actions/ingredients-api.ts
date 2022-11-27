import { BASE_URL } from "../../components/utils/constants";
import { checkResponse } from "../../components/utils/api";
import { TApi, TDispatch, TIngredient } from "../../components/utils/type";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTSv_FAILED';

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

export type TIngredients =
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
