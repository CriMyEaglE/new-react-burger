import { GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "../actions/order-details"
import { orderDetailsReducer, orderDetailsState } from "./order-details"

describe('order-details reducer test', () => {
   it('should GET_ORDER_REQUEST', () => {
      expect(orderDetailsReducer(orderDetailsState, { type: GET_ORDER_REQUEST })).toEqual({
         ...orderDetailsState,
         id: '',
         orderRequest: true
      })
   })
   it('should GET_ORDER_SUCCESS', () => {
      expect(orderDetailsReducer(orderDetailsState, { type: GET_ORDER_SUCCESS, payload: '31638' })).toEqual({
         ...orderDetailsState,
         id: '31638',
         orderRequest: false,
         orderFailed: false,
         orderSuccess: true
      })
   })
   it('should GET_ORDER_FAILED', () => {
      expect(orderDetailsReducer(orderDetailsState, { type: GET_ORDER_FAILED })).toEqual({
         ...orderDetailsState,
         id: '',
         orderFailed: true,
         orderRequest: false
      })
   })

})
