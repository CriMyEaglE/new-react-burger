import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";

export const GET_RESET_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';

const getResetSuccess = (payload) => ({
  type: GET_RESET_SUCCESS,
  payload
})

export const getResetSuccessApi = () => {
  const url = `${BASE_URL}/password-reset/reset`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: '',
      token: ''
    })
  };
  return (dispatch) => {
    request(url, options)
      .then(({ success, message }) => {
        dispatch(getResetSuccess(success));
      })
      .catch(console.warn)
  }
}
