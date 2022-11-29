import { TOrder } from '../../utils/type';

export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_OPENED: 'WS_CONNECTION_OPENED' = 'WS_CONNECTION_OPENED';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';

export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export interface IWsConnectionSuccess {
   readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWsConnectionOpened {
   readonly type: typeof WS_CONNECTION_OPENED
}

export interface IWsConnectionClosed {
   readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWsConnectionError {
   readonly type: typeof WS_CONNECTION_ERROR
}

export interface IWsGetOrders {
   readonly type: typeof WS_GET_ORDERS
   readonly payload: TOrderPayload
}

export interface IWsSendMessage {
   readonly type: typeof WS_SEND_MESSAGE
   readonly payload: string
}

export const wsActions: IWsActions = {
   onOpen: WS_CONNECTION_SUCCESS,
   wsInit: WS_CONNECTION_OPENED,
   onClose: WS_CONNECTION_CLOSED,
   onError: WS_CONNECTION_ERROR,
   wsSendMessage: WS_SEND_MESSAGE,
   wsGetOrders: WS_GET_ORDERS
};

export interface IWsActions {
   readonly wsInit: typeof WS_CONNECTION_OPENED,
   readonly wsSendMessage: typeof WS_SEND_MESSAGE,
   readonly onOpen: typeof WS_CONNECTION_SUCCESS,
   readonly onClose: typeof WS_CONNECTION_CLOSED,
   readonly onError: typeof WS_CONNECTION_ERROR,
   readonly wsGetOrders: typeof WS_GET_ORDERS
}

export type TWsActions =
   | IWsConnectionOpened
   | IWsConnectionSuccess
   | IWsConnectionError
   | IWsConnectionClosed
   | IWsGetOrders
   | IWsSendMessage

type TOrderPayload = {
   success: boolean,
   orders: Array<TOrder>,
   total: number,
   totalToday: number
}

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
   return {
      type: WS_CONNECTION_SUCCESS
   };
};

export const wsConnectionOpened = (): IWsConnectionOpened => {
   return {
      type: WS_CONNECTION_OPENED
   };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
   return {
      type: WS_CONNECTION_CLOSED
   };
};

export const wsConnectionError = (): IWsConnectionError => {
   return {
      type: WS_CONNECTION_ERROR
   };
};

export const wsGetOrders = (payload: TOrderPayload): IWsGetOrders => {
   return {
      type: WS_GET_ORDERS,
      payload
   };
};

export const wsSendMessage = (message: string): IWsSendMessage => {
   return {
      type: WS_SEND_MESSAGE,
      payload: message
   };
};


