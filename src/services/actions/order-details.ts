import { clearConstructorList } from "./burger-constructor";
import { BASE_URL } from "../../utils/constants";
import { checkResponse, request } from "../../utils/api";
import { TApi } from "../../utils/type";
import { getCookie } from "../../utils/coockie";

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

export interface IGetOrderRequest {
   type: typeof GET_ORDER_REQUEST
}
export interface IGetOrderSuccess {
   type: typeof GET_ORDER_SUCCESS,
   payload: string
}
export interface IGetOrderFailed {
   type: typeof GET_ORDER_FAILED
}

export type TOrderActions =
   | IGetOrderRequest
   | IGetOrderSuccess
   | IGetOrderFailed
const getOrderSucces = (id: string): IGetOrderSuccess => ({
   type: GET_ORDER_SUCCESS,
   payload: id
});

export const getOrderRequest = () => ({
   type: GET_ORDER_REQUEST
})

export const getOrderDetails: TApi = (id: string[]) => {
   const url = `${BASE_URL}/orders`;
   const options = {
      method: 'POST',
      headers: {
         authorization: 'Bearer ' + getCookie('access'),
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         ingredients: id,
      })
   };
   return (dispatch) => {
      request(url, options)
         .then(({ success, order: { number } }) => {
            if (success) {
               dispatch(getOrderSucces(number))
            }
         })
         .then(() => {
            dispatch(clearConstructorList())
         })
         .catch(console.warn)
   }
}