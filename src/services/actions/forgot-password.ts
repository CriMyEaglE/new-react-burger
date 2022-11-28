import { request } from "../../utils/api";
import { BASE_URL } from "../../utils/constants";
import { TDispatch } from "../../utils/type";

export const GET_RESTORE_SUCCESS: 'GET_RESTORE_SUCCESS' = 'GET_RESTORE_SUCCESS';

export interface IGetRestoreSuccess {
   readonly type: typeof GET_RESTORE_SUCCESS,
   readonly payload: boolean
}

export type TForgotPasswordActions =
   | IGetRestoreSuccess

const getRestoreSuccess = (payload: boolean): IGetRestoreSuccess => ({
   type: GET_RESTORE_SUCCESS,
   payload
})

export const getRestoreSuccessApi = () => {
   const url = `${BASE_URL}/password-reset`;
   const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         email: ''
      })
   };
   return (dispatch: TDispatch) => {
      request(url, options)
         .then(({ success, message }) => {

            dispatch(getRestoreSuccess(success));
         })
         .catch(console.warn);
   }
}
