import { GET_RESTORE_SUCCESS } from "../actions/forgot-password";

const initialState = {
  success: false
}

export const restorePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTORE_SUCCESS: {
      return {  
        ...state,
        success: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
