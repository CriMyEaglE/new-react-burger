import { getCookie } from "../../utils/coockie";
import { LOGIN_USER, LOGOUT_USER } from "../actions/login";
import { TApplicationActions } from "../actions/rootActions";

type TInitialState = {
   login: boolean,
   logout: boolean
}
export const initialState = {
   login: !!getCookie('access') ? true : false,
   logout: false
};

export const loginUserReducer = (state = initialState, action: TApplicationActions): TInitialState => {
   switch (action.type) {
      case LOGOUT_USER: {
         return {
            ...state,
            login: false,
            logout: action.payload
         }
      }
      case LOGIN_USER: {
         return {
            ...state,
            login: action.payload,
            logout: !action.payload
         }
      }
      default: {
         return state;
      }
   }
}

