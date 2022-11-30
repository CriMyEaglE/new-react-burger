import {
   GET_CONSTRUCTOR_ITEM,
   DELETE_CONSTRUCTOR_ITEM,
   GET_CONSTRUCTOR_BUN, MOVE_CONSTRUCTOR_ITEM,
   CLEAR_CONSTRUCTOR_LIST
} from '../actions/burger-constructor';
import update from 'immutability-helper';

const constructorState = {
   constructorList: []
}

export const constructorReducer = (state = constructorState, action) => {
   switch (action.type) {
      case GET_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: !state.constructorList.find(item => item.type === 'bun') || action.item.type !== 'bun'
               ? [...state.constructorList, action.item]
               : [...state.constructorList]
         }
      }
      case DELETE_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: action.item.type !== 'bun'
               ? state.constructorList.filter((item) => item.id !== action.item.id)
               : [...state.constructorList]
         }
      }
      case GET_CONSTRUCTOR_BUN: {
         return {
            ...state,
            constructorList: action.item.type === 'bun'
               ? [...state.constructorList.filter(item => item.type !== 'bun'), action.item]
               : [...state.constructorList]
         }
      }
      case MOVE_CONSTRUCTOR_ITEM: {
         return {
            ...state,
            constructorList: [...update(state.constructorList, {
               $splice: [
                  [action.dragIndex, 1],
                  [action.hoverIndex, 0, state.constructorList[action.dragIndex]]
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