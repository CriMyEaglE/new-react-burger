import { REGISTRATION_USER, TPayload, TUser } from "../actions/registration";
import { TBunch } from "../actions/rootActions";

type TInitialState = {
   success: boolean,
   user: TUser
}

const initialState = {
   success: false,
   user: {
      email: '',
      password: '',
      name: ''
   }
};

export const registrationUserReducer = (state = initialState, action: TBunch): TInitialState => {
   switch (action.type) {
      case REGISTRATION_USER: {
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
