import {
   GET_ORDER_REQUEST,
   GET_ORDER_SUCCESS,
   GET_ORDER_FAILED
} from '../actions/order-details'
import { TApplicationActions } from '../actions/rootActions'

type TInitialState = {
   id: string,
   orderRequest: boolean,
   orderSuccess: boolean,
   orderFailed: boolean
}

const orderDetailsState: TInitialState = {
   id: '',
   orderRequest: false,
   orderSuccess: false,
   orderFailed: false
}

export const orderDetailsReducer = (state = orderDetailsState, action: TApplicationActions): TInitialState => {
   switch (action.type) {
      case GET_ORDER_REQUEST: {
         return {
            ...state,
            id: '',
            orderRequest: true
         }
      }
      case GET_ORDER_SUCCESS: {
         return {
            ...state,
            orderRequest: false,
            orderFailed: false,
            orderSuccess: true,
            id: action.payload
         }
      }
      case GET_ORDER_FAILED: {
         return {
            ...state,
            orderFailed: true,
            orderRequest: false
         }
      }
      default: {
         return state
      }
   }
}