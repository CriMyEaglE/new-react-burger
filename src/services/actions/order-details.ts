import { clearConstructorList } from "./burger-constructor";
import { BASE_URL } from "../../utils/constants";
import { checkResponse } from "../../utils/api";
import { TApi } from "../../utils/type";

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
   return (dispatch) => {
      fetch(`${BASE_URL}/orders`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            ingredients: id
         })
      })
         .then(checkResponse)
         .then(({ order: { number } }) => {
            dispatch(getOrderSucces(number))
         })
         .then(() => dispatch(clearConstructorList()))
         .catch(console.warn)
   }
}