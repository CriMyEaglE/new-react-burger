import { store } from './store';
import { ThunkAction } from 'redux-thunk';
import { TBunch } from '../../services/actions/rootActions'
import {
   ActionCreator
} from 'redux'

import {
   TypedUseSelectorHook,
   useDispatch as dispatchHook,
   useSelector as selectorHook
} from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

export type TIngredient = {
   _id: string,
   name: string,
   type: string,
   proteins: number,
   fat: number,
   carbohydrates: number,
   calories: number,
   price: number,
   image: string,
   image_mobile: string,
   image_large: string,
   __v: number,
   id?: string
};

export type TStore = ReturnType<typeof store.getState>;

export type TDispatch = typeof store.dispatch;

export type TApi<ReturnType = void> = ActionCreator<
   ThunkAction<ReturnType, TStore, never, TBunch>
>;

export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TBunch>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
