import { Middleware } from 'redux';
import { TMiddlewareActions } from '../services/actions/rootActions';

export const socketMidlleware = (url: string, actions: TMiddlewareActions): Middleware => {
   return (store) => {
      let socket: WebSocket | null = null;
      return (next) => {
         return (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, wsSendMessage, onOpen, onClose, onError, wsGetOrders } = actions;
            if (type === wsInit) {
               socket = new WebSocket(`${url}${type === wsInit && payload ? `?token=${payload}` : ''}`);
            }
            if (socket && type === onClose) {
               socket.close(1000);
               socket.onclose = (event) => {
                  dispatch({ type: onClose })
               }
            }
            if (socket) {
               socket.onopen = (event) => {
                  dispatch({ type: onOpen })
               };
               socket.onerror = (event) => {
                  dispatch({ type: onError })
               };
               socket.onmessage = (event) => {
                  const { data } = event;
                  const parsedData = JSON.parse(data);
                  const { success } = parsedData;
                  success && dispatch({ type: wsGetOrders, payload: parsedData });

               };
               if (type === wsSendMessage) {
                  const message = { ...payload }
                  socket.send(JSON.stringify(message));
               }
            }
            next(action);
         }
      }
   }
}
