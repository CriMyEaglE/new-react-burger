import { request } from "../../utils/api";
import { BASE_URL } from "../../utils/constants";
import { getCookie, refreshToken } from "../../utils/coockie";
import { TApi, TDispatch } from "../../utils/type";

export const GET_USER_INFO: 'GET_USER_INFO' = 'GET_USER_INFO';
export const PATCH_USER_INFO: 'PATCH_USER_INFO' = 'PATCH_USER_INFO';

type TUser = {
   email: string,
   name: string
}

type TPayload = {
   success: boolean,
   user: TUser
}

interface IGetUserInfo {
   readonly type: typeof GET_USER_INFO,
   readonly payload: TPayload
}

interface IPatchUserInfo {
   readonly type: typeof PATCH_USER_INFO,
   readonly payload: TPayload
}
export type TProfileActions =
   | IGetUserInfo
   | IPatchUserInfo

const getUserInfo = (payload: TPayload): IGetUserInfo => ({
   type: GET_USER_INFO,
   payload
});

const patchUserInfo = (payload: TPayload): IPatchUserInfo => ({
   type: PATCH_USER_INFO,
   payload
});

export const getUserInfoApi: TApi = () => {
   const url = `${BASE_URL}/auth/user`;
   const options = {
      headers: {
         authorization: 'Bearer ' + getCookie('access'),
         'Content-Type': 'application/json'
      }
   };

   return (dispatch: TDispatch) => {
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

export const patchUserInfoApi: TApi = (email: string, name: string, password: string) => {
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

   return (dispatch: TDispatch) => {
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
