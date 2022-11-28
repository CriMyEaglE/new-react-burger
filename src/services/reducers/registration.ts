import { REGISTRATION_USER, TUser } from "../actions/registration";
import { TApplicationActions } from "../actions/rootActions";

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

export const registrationUserReducer = (state = initialState, action: TApplicationActions): TInitialState => {
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
