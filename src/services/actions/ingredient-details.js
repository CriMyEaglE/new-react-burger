export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export const getIngredientDetails = (element) => ({
   type: GET_INGREDIENT_DETAILS,
   element
});

export const removeIngredientDetails = () => ({
   type: REMOVE_INGREDIENT_DETAILS,
});