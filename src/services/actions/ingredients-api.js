import { BASE_URL } from "../../components/utils/constants";
import { checkResponse } from "../../components/utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTSv_FAILED';

export function getIngredients() {
   return function (dispatch) {
      dispatch({
         type: GET_INGREDIENTS_REQUEST
      });
      fetch(`${BASE_URL}/ingredients`)
         .then(checkResponse)
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: GET_INGREDIENTS_SUCCESS,
                  items: res.data
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
