import { orders } from "../../utils/test-contants";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_OPENED, WS_CONNECTION_SUCCESS, WS_GET_ORDERS } from "../actions/websocket-all-orders";
import { initialState, webSocketAllOrdersReduser } from "./websocket-all-orders";

describe('websocket-all-orders reducer test', () => {
   it('should WS_CONNECTION_OPENED', () => {
      expect(webSocketAllOrdersReduser(initialState, { type: WS_CONNECTION_OPENED })).toEqual({
         ...initialState,
         wsOpened: true
      });
   });
   it('should WS_CONNECTION_SUCCESS', () => {
      expect(webSocketAllOrdersReduser({ ...initialState, wsConnected: false }, { type: WS_CONNECTION_SUCCESS })).toEqual({
         ...initialState,
         wsConnected: true
      });
   });
   it('should WS_CONNECTION_ERROR', () => {
      expect(webSocketAllOrdersReduser(initialState, { type: WS_CONNECTION_ERROR })).toEqual({
         ...initialState,
         wsConnected: false,
      });
   });
   it('should WS_CONNECTION_CLOSED', () => {
      expect(webSocketAllOrdersReduser({ ...initialState, wsConnected: true }, { type: WS_CONNECTION_CLOSED })).toEqual({
         ...initialState,
         wsConnected: false,
         wsOpened: false
      });
   });
   it('should WS_GET_ORDERS', () => {
      expect(webSocketAllOrdersReduser(initialState, { type: WS_GET_ORDERS, payload: orders })).toEqual({
         ...initialState,
         orders: orders.orders,
         total: orders.total,
         totalToday: orders.totalToday
      });
   });
})
