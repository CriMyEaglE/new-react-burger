import { request } from "../../components/utils/api";
import { BASE_URL } from "../../components/utils/constants";
import { getCookie, setCookie } from "../../components/utils/coockie";
import { TApi, TDispatch } from "../../components/utils/type";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface ILoginUser {
   readonly type: typeof LOGIN_USER,
   readonly payload: boolean
}

export interface ILogoutUser {
   readonly type: typeof LOGOUT_USER,
   readonly payload: boolean
}

export type TLogin =
   | ILoginUser
   | ILogoutUser

const loginUser = (payload: boolean): ILoginUser => ({
   type: LOGIN_USER,
   payload
});

const logoutUser = (payload: boolean): ILogoutUser => ({
   type: LOGOUT_USER,
   payload
});

type TUserData = {
   email: string,
   password: string
}
export const loginUserApi: TApi = (userData: TUserData) => {
   const { email, password } = userData;
   const url = `${BASE_URL}/auth/login`;
   const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         email,
         password
      })
   };

   return (dispatch) => {
      request(url, options)
         .then((data) => {
            const { success, refreshToken, accessToken } = data;
            if (success) {
               dispatch(loginUser(success));
               setCookie('access', accessToken.split('Bearer ')[1]);
               setCookie('refresh', refreshToken);
               // document.location.reload();
            }
         })
         .catch(console.warn)
   }
}

export const logoutUserApi = () => {
   const url = `${BASE_URL}/auth/logout`;
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         token: getCookie('refresh')
      })
   };

   return (dispatch: TDispatch) => {
      request(url, options)
         .then((data) => {
            const { success } = data;
            if (success) {
               dispatch(logoutUser(data));
            }
         })
         .catch(console.warn)
   }
}
