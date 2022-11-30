import {
  createStore,
  compose,
  applyMiddleware,

} from 'redux';
import thunk from 'redux-thunk';
import { wsActions } from '../services/actions/websocket-all-orders';
import { profileWsActions } from '../services/actions/websocket-profile-orders';
import { rootReducer } from '../services/reducers/rootReducers';
import { ordersUrl, profileOrdersUrl } from './constants';
import { socketMidlleware } from './middleware';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMidlleware(ordersUrl, wsActions), socketMidlleware(profileOrdersUrl, profileWsActions)));

export const store = createStore(rootReducer, enhancer);
