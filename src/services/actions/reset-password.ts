import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";
import { TApi, TDispatch } from "../../components/utils/type";

export const GET_RESET_SUCCESS = 'GET_RESET_SUCCESS';

export interface IGetResetSuccess {
  type: typeof GET_RESET_SUCCESS,
  payload: boolean
}
export type TResetPassword =
  | IGetResetSuccess

const getResetSuccess = (payload: boolean): IGetResetSuccess => ({
  type: GET_RESET_SUCCESS,
  payload
})

export const getResetSuccessApi: TApi = () => {
  const url = `${BASE_URL}/password-reset/reset`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: '',
      token: ''
    })
  };
  return (dispatch: TDispatch) => {
    request(url, options)
      .then(({ success, message }) => {
        dispatch(getResetSuccess(success));
      })
      .catch(console.warn)
  }
}
