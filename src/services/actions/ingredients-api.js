export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTSv_FAILED';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export function getIngredients() {
   return function (dispatch) {
      dispatch({
         type: GET_INGREDIENTS_REQUEST
      });
      fetch('https://norma.nomoreparties.space/api/ingredients')
         .then(res => res.json())
         .then(res => {
            if (res && res.success) {
               dispatch({
                  type: GET_INGREDIENTS_SUCCESS,
                  items: res.data
               });
            } else {
               dispatch({
                  type: GET_INGREDIENTS_FAILED
               });
            }
         })
         .catch(console.warn);
   };
}

