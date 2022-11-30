import { Route, Redirect, useLocation, RouteProps } from "react-router-dom";
import React, { FC } from 'react';
import { useSelector } from "../../utils/hooks";
import ResetPassword from "../reset-password/reset-password";

type TProtectedRoute = RouteProps & { children?: React.ReactNode }

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
   const login: boolean = useSelector(state => state.loginUser.login);
   const successRestorePassword = useSelector(state => state.restorePassword.success);
   console.log(successRestorePassword)
   const location = useLocation();

   if (login) {
      return (
         <Route>
            {children}
         </Route>
      )
   } else
      if (!login && successRestorePassword) {
         return (
            <Route>
               <ResetPassword />
            </Route>
         )
      } else {
         return (
            <Route>
               (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
            </Route>
         )
      }
};