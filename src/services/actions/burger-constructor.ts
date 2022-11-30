import { TIngredient } from "../../utils/type";

export const GET_CONSTRUCTOR_ITEM: 'GET_CONSTRUCTOR_ITEM' = 'GET_CONSTRUCTOR_ITEM';
export const DELETE_CONSTRUCTOR_ITEM: 'DELETE_CONSTRUCTOR_ITEM' = 'DELETE_CONSTRUCTOR_ITEM';
export const GET_CONSTRUCTOR_BUN: 'GET_CONSTRUCTOR_BUN' = 'GET_CONSTRUCTOR_BUN';
export const CLEAR_CONSTRUCTOR_LIST: 'CLEAR_CONSTRUCTOR_LIST' = 'CLEAR_CONSTRUCTOR_LIST';
export const MOVE_CONSTRUCTOR_ITEM: 'MOVE_CONSTRUCTOR_ITEM' = 'MOVE_CONSTRUCTOR_ITEM';

export interface IGetConstructorBun {
  readonly type: typeof GET_CONSTRUCTOR_BUN,
  readonly payload: TIngredient
}
export interface IGetConstructorItem {
  readonly type: typeof GET_CONSTRUCTOR_ITEM,
  readonly payload: TIngredient
}
export interface IDeleteConstructorItem {
  readonly type: typeof DELETE_CONSTRUCTOR_ITEM,
  readonly payload: TIngredient
}
export interface IСlearConstructorList {
  readonly type: typeof CLEAR_CONSTRUCTOR_LIST,
}

export interface IMoveConstructorItem {
  readonly type: typeof MOVE_CONSTRUCTOR_ITEM,
  readonly payload: {
    dragIndex: number
    hoverIndex: number
  }
}

export type TBurgerConstructorActions =
  | IGetConstructorBun
  | IGetConstructorItem
  | IDeleteConstructorItem
  | IСlearConstructorList
  | IMoveConstructorItem

export const getConstructorBun = (item: TIngredient): IGetConstructorBun => ({
  type: GET_CONSTRUCTOR_BUN,
  payload: item
});

export const getConstructorItem = (item: TIngredient): IGetConstructorItem => ({
  type: GET_CONSTRUCTOR_ITEM,
  payload: item
});

export const deleteConstructorItem = (item: TIngredient): IDeleteConstructorItem => ({
  type: DELETE_CONSTRUCTOR_ITEM,
  payload: item
});

export const clearConstructorList = (): IСlearConstructorList => ({
  type: CLEAR_CONSTRUCTOR_LIST
});

export const moveConstructorItem = (dragIndex: number, hoverIndex: number): IMoveConstructorItem => ({
  type: MOVE_CONSTRUCTOR_ITEM,
  payload: {
    dragIndex,
    hoverIndex
  }
});