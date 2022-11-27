import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";
import { TDispatch } from "../../components/utils/type";

export const GET_RESTORE_SUCCESS = 'GET_RESTORE_SUCCESS';

export interface IGetRestoreSuccess {
   readonly type: typeof GET_RESTORE_SUCCESS,
   readonly payload: boolean
}

export type TForgotPassword =
   | IGetRestoreSuccess

const getRestoreSuccess = (payload: boolean) => ({
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
