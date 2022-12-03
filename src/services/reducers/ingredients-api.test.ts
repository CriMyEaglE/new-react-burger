import { ingredientsData } from "../../utils/test-contants";
import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../actions/ingredients-api"
import { ingredientsReducer, initialState } from "./ingredients-api"

describe('ingredients-api reducer test', () => {
   it('should GET_INGREDIENTS_REQUEST', () => {
      expect(ingredientsReducer(initialState, { type: GET_INGREDIENTS_REQUEST })).toEqual({
         ...initialState,
         ingredientsRequest: true
      })
   })
   it('should GET_INGREDIENTS_SUCCESS', () => {
      expect(ingredientsReducer(initialState, { type: GET_INGREDIENTS_SUCCESS, payload: ingredientsData })).toEqual({
         ...initialState,
         ingredientsFailed: false,
         ingredientsRequest: false,
         ingredients: ingredientsData
      })
   })
   it('should GET_INGREDIENTS_FAILED', () => {
      expect(ingredientsReducer(initialState, { type: GET_INGREDIENTS_FAILED })).toEqual({
         ...initialState,
         ingredientsFailed: true,
         ingredientsRequest: false
      })
   })
})
