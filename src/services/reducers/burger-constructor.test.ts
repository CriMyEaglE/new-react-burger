import { blueBun, purpleBun, sauce, dragIndex, hoverIndex, beef } from "../../utils/test-contants";
import { CLEAR_CONSTRUCTOR_LIST, DELETE_CONSTRUCTOR_ITEM, GET_CONSTRUCTOR_BUN, GET_CONSTRUCTOR_ITEM, MOVE_CONSTRUCTOR_ITEM } from "../actions/burger-constructor";
import { constructorReducer, constructorState } from "./burger-constructor";



describe('burger-constructor reducer test', () => {
   it('should return initial state', () => {
      expect(constructorReducer(constructorState, { type: CLEAR_CONSTRUCTOR_LIST })).toEqual(constructorState)
   })
   it('should CLEAR_CONSTRUCTOR_LIST', () => {
      expect(constructorReducer(constructorState, { type: CLEAR_CONSTRUCTOR_LIST })).toEqual(constructorState)
   })
   it('should GET_CONSTRUCTOR_ITEM', () => {
      expect(constructorReducer({ constructorList: [sauce] }, { type: GET_CONSTRUCTOR_ITEM, payload: sauce })).toEqual({
         constructorList: [sauce, sauce]
      })
   })
   it('should GET_CONSTRUCTOR_BUN', () => {
      expect(constructorReducer({ constructorList: [] }, { type: GET_CONSTRUCTOR_BUN, payload: blueBun })).toEqual({
         constructorList: [blueBun]
      })
   })
   it('should replace bun', () => {
      expect(constructorReducer({ constructorList: [blueBun] }, { type: GET_CONSTRUCTOR_BUN, payload: purpleBun })).toEqual({
         constructorList: [purpleBun]
      })
   })
   it('should DELETE_CONSTRUCTOR_ITEM', () => {
      expect(constructorReducer({ constructorList: [sauce] }, { type: DELETE_CONSTRUCTOR_ITEM, payload: sauce })).toEqual({
         constructorList: []
      })
   })
   it('should MOVE_CONSTRUCTOR_ITEM', () => {
      expect(constructorReducer({ constructorList: [sauce, beef, sauce] }, { type: MOVE_CONSTRUCTOR_ITEM, payload: { dragIndex, hoverIndex } })).toEqual({
         constructorList: [sauce, sauce, beef]
      })
   })
})
