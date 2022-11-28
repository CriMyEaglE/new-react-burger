import { request } from "../../utils/api";
import { BASE_URL } from "../../utils/constants";
import { TApi, TDispatch } from "../../utils/type";

export const REGISTRATION_USER: 'REGISTRATION_USER' = 'REGISTRATION_USER';

export type TUser = {
   email: string,
   password: string,
   name: string
}

export type TPayload = {
   success: boolean,
   user: TUser
}

interface IRegistrationUser {
   readonly type: typeof REGISTRATION_USER,
   readonly payload: TPayload
}

export type TRegistrationUserActions =
   | IRegistrationUser

const registrationUser = (payload: TPayload): IRegistrationUser => ({
   type: REGISTRATION_USER,
   payload
});

export const registrationUserApi: TApi = (userData: TUser) => {
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

   return (dispatch: TDispatch) => {
      request(url, options)
         .then((res) => {
            dispatch(registrationUser(res));
         })
         .catch(console.warn)
   }
}
