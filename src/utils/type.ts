import { store } from './store';
import { ThunkAction } from 'redux-thunk';
import { TApplicationActions } from '../services/actions/rootActions'
import {
   ActionCreator
} from 'redux'

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
   id: string
};

export type TDispatch = typeof store.dispatch;

export type TApi<ReturnType = void> = ActionCreator<
   ThunkAction<ReturnType, RootState, never, TApplicationActions>
>;

export type RootState = ReturnType<typeof store.getState>;

export type TOrder = {
   _id: string,
   ingredients: Array<string>,
   status: string,
   name: string,
   createdAt: string,
   updatedAt: string,
   number: number
}
