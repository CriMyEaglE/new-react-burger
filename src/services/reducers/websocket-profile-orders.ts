import {
  PROFILE_WS_CONNECTION_CLOSED,
  PROFILE_WS_CONNECTION_ERROR,
  PROFILE_WS_CONNECTION_OPENED,
  PROFILE_WS_CONNECTION_SUCCESS,
  PROFILE_WS_GET_ORDERS,
  PROFILE_WS_SEND_MESSAGE
} from '../actions/websocket-profile-orders';
import { TOrder } from '../../utils/type'
import { TApplicationActions } from '../actions/rootActions';

type TInitialState = {
  wsOpened: boolean,
  wsConnected: boolean,
  orders: Array<TOrder> | []
  total: null | number,
  totalToday: null | number,
}

export const initialState: TInitialState = {
  wsOpened: false,
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
}

export const websocketProfileOrdersReduser = (state = initialState, action: TApplicationActions): TInitialState => {
  switch (action.type) {
    case PROFILE_WS_CONNECTION_OPENED: {
      return {
        ...state,
        wsOpened: true
      };
    }
    case PROFILE_WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true
      };
    }
    case PROFILE_WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false
      };
    }
    case PROFILE_WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
        wsOpened: false
      };
    }
    case PROFILE_WS_GET_ORDERS: {
      return {
        ...state,
        orders: state.orders.length < 10
          ? [...state.orders, ...action.payload.orders]
          : [...state.orders],
        total: action.payload.total,
        totalToday: action.payload.totalToday,

      };
    }
    case PROFILE_WS_SEND_MESSAGE: {
      return {
        ...state,

      };
    }
    default:
      return state
  }
}
