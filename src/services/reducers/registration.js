import { REGISTRATION_USER } from "../actions/registration";

const initialState = {
   success: false,
   user: {},
};

export const registrationUserReducer = (state = initialState, action) => {
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
