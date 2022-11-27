import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";
import { getCookie, refreshToken } from "../../components/utils/coockie";

export const GET_USER_INFO = 'GET_USER_INFO';
export const PATCH_USER_INFO = 'PATCH_USER_INFO';

const getUserInfo = (payload) => ({
   type: GET_USER_INFO,
   payload
});

const patchUserInfo = (payload) => ({
   type: PATCH_USER_INFO,
   payload
});

export const getUserInfoApi = () => {
   const url = `${BASE_URL}/auth/user`;
   const options = {
      headers: {
         authorization: 'Bearer ' + getCookie('access'),
         'Content-Type': 'application/json'
      }
   };

   return (dispatch) => {
      request(url, options)
         .then((data) => {
            const { success } = data;
            if (success) {
               dispatch(getUserInfo(data));
            }
         })
         .catch((err) => {
            if (err) {
               refreshToken()
            }
         })
   }
}

export const patchUserInfoApi = (email, name, password) => {
   const url = `${BASE_URL}/auth/user`;
   const options = {
      method: 'PATCH',
      headers: {
         authorization: 'Bearer ' + getCookie('access'),
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         email,
         name,
         password
      })
   };

   return (dispatch) => {
      request(url, options)
         .then((data) => {
            const { success } = data;
            if (success) {
               dispatch(patchUserInfo(data));
            }
         })
         .catch((err) => {
            if (err) {
               refreshToken()
            }
         })
   }
}