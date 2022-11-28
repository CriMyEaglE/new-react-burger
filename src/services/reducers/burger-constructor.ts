import {
   GET_CONSTRUCTOR_ITEM,
   DELETE_CONSTRUCTOR_ITEM,
   GET_CONSTRUCTOR_BUN, MOVE_CONSTRUCTOR_ITEM,
   CLEAR_CONSTRUCTOR_LIST
} from '../actions/burger-constructor';
import update from 'immutability-helper';
import { TIngredient } from '../../utils/type';
import { TApplicationActions } from '../actions/rootActions';

type TIinitialState = {
   constructorList: Array<TIngredient>
}

const constructorState: TIinitialState = {
   constructorList: []
}

export const constructorReducer = (state = constructorState, action: TApplicationActions): TIinitialState => {
   switch (action.type) {
      case GET_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: !state.constructorList.find(item => item.type === 'bun') || action.payload.type !== 'bun'
               ? [...state.constructorList, action.payload]
               : [...state.constructorList]
         }
      }
      case DELETE_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: action.payload.type !== 'bun'
               ? state.constructorList.filter((item) => item.id !== action.payload.id)
               : [...state.constructorList]
         }
      }
      case GET_CONSTRUCTOR_BUN: {
         return {
            ...state,
            constructorList: action.payload.type === 'bun'
               ? [...state.constructorList.filter(item => item.type !== 'bun'), action.payload]
               : [...state.constructorList]
         }
      }
      case MOVE_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: [...update(state.constructorList, {
               $splice: [
                  [action.payload.dragIndex, 1],
                  [action.payload.hoverIndex, 0, state.constructorList[action.payload.dragIndex]]
               ]
            })]
         }
      }
      case CLEAR_CONSTRUCTOR_LIST: {
         return {
            ...state,
            constructorList: []
         }
      }
      default: {
         return state
      }
   }
}