import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";

export const GET_RESTORE_SUCCESS = 'GET_RESTORE_SUCCESS';

const getRestoreSuccess = (payload) => ({
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
   return (dispatch) => {
      request(url, options)
         .then(({ success, message }) => {

            dispatch(getRestoreSuccess(success));
         })
         .catch(console.warn);
   }
}
