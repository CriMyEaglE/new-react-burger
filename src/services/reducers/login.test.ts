import { LOGIN_USER, LOGOUT_USER } from "../actions/login"
import { initialState, loginUserReducer } from "./login"

describe('login reducer test', () => {
   it('should LOGOUT_USER', () => {
      expect(loginUserReducer(initialState, { type: LOGOUT_USER, payload: true })).toEqual({
         ...initialState,
         login: false,
         logout: true
      })
   })
   it('should LOGIN_USER', () => {
      expect(loginUserReducer(initialState, { type: LOGIN_USER, payload: true })).toEqual({
         ...initialState,
         login: true,
         logout: false
      })
   })
})
