import { useData } from "../../utils/test-contants";
import { REGISTRATION_USER } from "../actions/registration";
import { initialState, registrationUserReducer } from "./registration";

describe('registration reducer test', () => {
   it('should REGISTER_USER success', () => {
      expect(registrationUserReducer(initialState, { type: REGISTRATION_USER, payload: { success: true, user: useData } })).toEqual({
         success: true,
         user: useData
      });
   });

   it('should REGISTER_USER failed', () => {
      expect(registrationUserReducer(initialState, { type: REGISTRATION_USER, payload: { success: false, user: { email: '', password: '', name: '' } } })).toEqual(initialState);
   });

});