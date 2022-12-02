import { TOrder } from '../../utils/type';

export const PROFILE_WS_CONNECTION_OPENED = 'PROFILE_WS_CONNECTION_OPENED';
export const PROFILE_WS_CONNECTION_SUCCESS = 'PROFILE_WS_CONNECTION_SUCCESS';
export const PROFILE_WS_CONNECTION_ERROR = 'PROFILE_WS_CONNECTION_ERROR';
export const PROFILE_WS_CONNECTION_CLOSED = 'PROFILE_WS_CONNECTION_CLOSED';
export const PROFILE_WS_GET_ORDERS = 'PROFILE_WS_GET_ORDERS';
export const PROFILE_WS_SEND_MESSAGE = 'PROFILE_WS_SEND_MESSAGE';

export const profileWsActions: IWsProfileActions = {
   wsInit: PROFILE_WS_CONNECTION_OPENED,
   wsSendMessage: PROFILE_WS_SEND_MESSAGE,
   onOpen: PROFILE_WS_CONNECTION_SUCCESS,
   onClose: PROFILE_WS_CONNECTION_CLOSED,
   onError: PROFILE_WS_CONNECTION_ERROR,
   wsGetOrders: PROFILE_WS_GET_ORDERS
};

export interface IWsProfileActions {
   readonly wsInit: typeof PROFILE_WS_CONNECTION_OPENED,
   readonly wsSendMessage: typeof PROFILE_WS_SEND_MESSAGE,
   readonly onOpen: typeof PROFILE_WS_CONNECTION_SUCCESS,
   readonly onClose: typeof PROFILE_WS_CONNECTION_CLOSED,
   readonly onError: typeof PROFILE_WS_CONNECTION_ERROR,
   readonly wsGetOrders: typeof PROFILE_WS_GET_ORDERS
}

export interface IWsProfileConnectionOpened {
   readonly type: typeof PROFILE_WS_CONNECTION_OPENED
   readonly payload: string | undefined
}

export interface IWsProfileConnectionSuccess {
   readonly type: typeof PROFILE_WS_CONNECTION_SUCCESS
}
export interface IWsProfileConnectionError {
   readonly type: typeof PROFILE_WS_CONNECTION_ERROR
}
export interface IWsProfileConnectionClosed {
   readonly type: typeof PROFILE_WS_CONNECTION_CLOSED
}
export interface IWsProfileGetOrders {
   readonly type: typeof PROFILE_WS_GET_ORDERS
   readonly payload: TOrderPayload
}
export interface IWsProfileSendMessage {
   readonly type: typeof PROFILE_WS_SEND_MESSAGE
   readonly payload: string
}

export type TWsProfileActions =
   | IWsProfileConnectionOpened
   | IWsProfileConnectionSuccess
   | IWsProfileConnectionError
   | IWsProfileConnectionClosed
   | IWsProfileGetOrders
   | IWsProfileSendMessage

type TOrderPayload = {
   success: boolean,
   orders: Array<TOrder>,
   total: number,
   totalToday: number
}
export const wsProfileConnectionOpened = (payload: string | undefined): IWsProfileConnectionOpened => {
   return {
      type: PROFILE_WS_CONNECTION_OPENED,
      payload
   };
};

export const wsProfileConnectionSuccess = (): IWsProfileConnectionSuccess => {
   return {
      type: PROFILE_WS_CONNECTION_SUCCESS
   };
};

export const wsProfileConnectionError = (): IWsProfileConnectionError => {
   return {
      type: PROFILE_WS_CONNECTION_ERROR
   };
};

export const wsProfileConnectionClosed = (): IWsProfileConnectionClosed => {
   return {
      type: PROFILE_WS_CONNECTION_CLOSED
   };
};

export const wsProfileGetOrders = (payload: TOrderPayload): IWsProfileGetOrders => {
   return {
      type: PROFILE_WS_GET_ORDERS,
      payload
   };
};

export const wsProfileSendMessage = (message: string): IWsProfileSendMessage => {
   return {
      type: PROFILE_WS_SEND_MESSAGE,
      payload: message
   };
};


