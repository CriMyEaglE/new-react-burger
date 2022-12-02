import { purpleBun } from "../../utils/test-contants"
import { TIngredient } from "../../utils/type"
import { GET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../actions/ingredient-details"
import { ingredientDetailsState, ingredtientDetailsReducer } from "./ingredient-details"

describe('ingredient-details reducer test', () => {
   it('should handle GET_INGREDIENT_DETAILS', () => {
      expect(ingredtientDetailsReducer(ingredientDetailsState, { type: GET_INGREDIENT_DETAILS, payload: purpleBun })).toEqual({
         ingredientDetails: purpleBun
      })
   })

   it('should REMOVE_INGREDIENT_DETAILS', () => {
      expect(ingredtientDetailsReducer({ ingredientDetails: purpleBun }, { type: REMOVE_INGREDIENT_DETAILS })).toEqual(ingredientDetailsState)
   })

})
