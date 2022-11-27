import { GET_RESET_SUCCESS, TResetPassword } from '../actions/reset-password'
import { TBunch } from '../actions/rootActions'

type TInitialState = {
  success: boolean
}

const initialState = {
  success: false
}

export const resetPasswordReducer = (state = initialState, action: TBunch): TInitialState => {
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
