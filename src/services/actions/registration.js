import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";

export const REGISTRATION_USER = 'REGISTRATION_USER';

const registrationUser = (payload) => ({
   type: REGISTRATION_USER,
   payload
});

export const registrationUserApi = (userData) => {
   const { email, password, name } = userData;
   const url = `${BASE_URL}/auth/register`;
   const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         email,
         password,
         name
      })
   };

   return (dispatch) => {
      request(url, options)
         .then((res) => {
            dispatch(registrationUser(res));
         })
         .catch(console.warn)
   }
}
