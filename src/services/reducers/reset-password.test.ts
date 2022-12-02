import { GET_RESET_SUCCESS } from "../actions/reset-password";
import { initialState, resetPasswordReducer } from "./reset-password";

describe('reset-password reducer test', () => {
   it('should GET_RESET_PASSWORD_SUCCESS success', () => {
      expect(resetPasswordReducer(initialState, { type: GET_RESET_SUCCESS, payload: true })).toEqual({
         success: true
      });
   });
   it('should GET_RESET_PASSWORD_SUCCESS failed', () => {
      expect(resetPasswordReducer(initialState, { type: GET_RESET_SUCCESS, payload: false })).toEqual(initialState);
   });
});
