import { clearConstructorList } from "./burger-constructor";
import { BASE_URL } from "../../components/utils/constants";
import { checkResponse } from "../../components/utils/api";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

const getOrderSucces = (id) => ({
   type: GET_ORDER_SUCCESS,
   id
});

export const getOrderRequest = () => ({
   type: GET_ORDER_REQUEST
})

export const getOrderDetails = (id) => {
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