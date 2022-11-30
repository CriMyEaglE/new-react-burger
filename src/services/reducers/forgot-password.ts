import { GET_RESTORE_SUCCESS } from "../actions/forgot-password";
import { TApplicationActions } from "../actions/rootActions";

type TIinitialState = {
  success: boolean
}

const initialState = {
  success: false
}

export const restorePasswordReducer = (state = initialState, action: TApplicationActions): TIinitialState => {
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
