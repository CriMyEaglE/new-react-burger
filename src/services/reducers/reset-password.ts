import { GET_RESET_SUCCESS } from '../actions/reset-password'
import { TApplicationActions } from '../actions/rootActions'

type TInitialState = {
  success: boolean
}

export const initialState = {
  success: false
}

export const resetPasswordReducer = (state = initialState, action: TApplicationActions): TInitialState => {
  switch (action.type) {
    case GET_RESET_SUCCESS: {
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
