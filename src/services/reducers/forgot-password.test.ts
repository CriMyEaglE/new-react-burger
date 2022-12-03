import { GET_RESTORE_SUCCESS } from "../actions/forgot-password"
import { initialState, restorePasswordReducer } from "./forgot-password"

describe('forgot-password reducer test', () => {
   it('should return initial state', () => {
      expect(restorePasswordReducer(initialState, { type: GET_RESTORE_SUCCESS, payload: false })).toEqual(initialState)
   })
   it('should GET_RESTORE_SUCCESS', () => {
      expect(restorePasswordReducer({ success: false }, { type: GET_RESTORE_SUCCESS, payload: true })).toEqual({ success: true })
   })
})
