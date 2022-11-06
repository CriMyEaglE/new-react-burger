import { clearConstructorList } from "./burger-constructor";

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
      fetch('https://norma.nomoreparties.space/api/orders', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            ingredients: id
         })
      })
         .then(res => res.json())
         .then(({ order: { number } }) => {
            dispatch(getOrderSucces(number))
         })
         .then(() => dispatch(clearConstructorList()))
         .catch(console.warn)
   }
}