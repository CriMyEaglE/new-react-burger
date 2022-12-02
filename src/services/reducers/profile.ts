import { GET_USER_INFO, PATCH_USER_INFO } from "../actions/profile";
import { TApplicationActions } from "../actions/rootActions";

type TInitialState = {
   success: boolean,
   user: {
      email: string,
      name: string
   }
}

export const initialState = {
   success: false,
   user: {
      email: '',
      name: ''
   },
};

export const getUserProfileReducer = (state = initialState, action: TApplicationActions): TInitialState => {
   switch (action.type) {
      case GET_USER_INFO: {
         return {
            ...state,
            success: action.payload.success,
            user: action.payload.user,
         }
      }
      case PATCH_USER_INFO: {
         return {
            ...state,
            success: action.payload.success,
            user: action.payload.user,
         }
      }
      default: {
         return state;
      }
   }
}
