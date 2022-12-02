import { payload } from "../../utils/test-contants";
import { GET_USER_INFO, PATCH_USER_INFO } from "../actions/profile";
import { getUserProfileReducer, initialState } from "./profile";
describe('profile reducer test', () => {
   it('should GET_USER_INFO', () => {
      expect(getUserProfileReducer(initialState, { type: GET_USER_INFO, payload: payload })).toEqual({
         success: true,
         user: payload.user
      });
   });
   it('should PATCH_USER_INFO', () => {
      expect(getUserProfileReducer(initialState, { type: PATCH_USER_INFO, payload: payload })).toEqual({
         success: true,
         user: payload.user
      });
   });
})
