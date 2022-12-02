import {
   WS_CONNECTION_SUCCESS,
   WS_CONNECTION_ERROR,
   WS_CONNECTION_CLOSED,
   WS_GET_ORDERS,
   WS_SEND_MESSAGE
 } from '../actions/websocket-all-orders';
 import { TApplicationActions } from '../actions/rootActions';
 import { TOrder } from '../../utils/type'
 
 type TInitialState = {
   wsConnected: boolean,
   orders: Array<TOrder> | []
   total: null | number,
   totalToday: null | number
 }
 
 const initialState: TInitialState = {
   wsConnected: false,
   orders: [],
   total: null,
   totalToday: null
 }
 
 export const webSocketAllOrdersReduser = (state = initialState, action: TApplicationActions): TInitialState => {
   switch (action.type) {
     case WS_CONNECTION_SUCCESS: {
       return {
         ...state,
         wsConnected: true
       };
     }
     case WS_CONNECTION_ERROR: {
       return {
         ...state,
         wsConnected: false
       };
     }
     case WS_CONNECTION_CLOSED: {
       return {
         ...state,
         wsConnected: false
       };
     }
     case WS_GET_ORDERS: {
       return {
         ...state,
         orders: state.orders.length < 10
           ? [...state.orders, ...action.payload.orders]
           : [...state.orders],
           total: action.payload.total,
           totalToday: action.payload.totalToday
 
       };
     }
     case WS_SEND_MESSAGE: {
       return {
         ...state,
 
       };
     }
     default:
       return state
   }
 }
 