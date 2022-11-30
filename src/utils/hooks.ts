import {
   TypedUseSelectorHook,
   useDispatch as dispatchHook,
   useSelector as selectorHook
} from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { TApplicationActions } from '../services/actions/rootActions';
import { RootState } from './type';
import { useState, ChangeEvent } from 'react';

export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TApplicationActions>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useForm = (inputValues: { [key: string]: string }) => {
   const [values, setValues] = useState(inputValues);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setValues({ ...values, [name]: value });
   };
   return { values, handleChange, setValues };
}