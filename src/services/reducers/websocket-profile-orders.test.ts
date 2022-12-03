import { orders, token } from "../../utils/test-contants";
import { PROFILE_WS_CONNECTION_CLOSED, PROFILE_WS_CONNECTION_ERROR, PROFILE_WS_CONNECTION_OPENED, PROFILE_WS_CONNECTION_SUCCESS, PROFILE_WS_GET_ORDERS } from "../actions/websocket-profile-orders";
import { initialState, websocketProfileOrdersReduser } from "./websocket-profile-orders";

describe('user-orders-socket reducer test', () => {
   it('should PROFILE_WS_CONNECTION_OPENED', () => {
      expect(websocketProfileOrdersReduser(initialState, { type: PROFILE_WS_CONNECTION_OPENED, payload: token })).toEqual({
         ...initialState,
         wsOpened: true
      });
   });
   it('should PROFILE_WS_CONNECTION_SUCCESS', () => {
      expect(websocketProfileOrdersReduser({ ...initialState, wsConnected: false }, { type: PROFILE_WS_CONNECTION_SUCCESS })).toEqual({
         ...initialState,
         wsConnected: true
      });
   });
   it('should PROFILE_WS_CONNECTION_ERROR', () => {
      expect(websocketProfileOrdersReduser(initialState, { type: PROFILE_WS_CONNECTION_ERROR })).toEqual({
         ...initialState,
         wsConnected: false,
      });
   });
   it('should PROFILE_WS_CONNECTION_CLOSED', () => {
      expect(websocketProfileOrdersReduser({ ...initialState, wsConnected: true }, { type: PROFILE_WS_CONNECTION_CLOSED })).toEqual({
         ...initialState,
         wsConnected: false,
         wsOpened: false
      });
   });
   it('should PROFILE_WS_GET_ORDERS', () => {
      expect(websocketProfileOrdersReduser(initialState, { type: PROFILE_WS_GET_ORDERS, payload: orders })).toEqual({
         ...initialState,
         orders: orders.orders,
         total: orders.total,
         totalToday: orders.totalToday
      });
   });
})
