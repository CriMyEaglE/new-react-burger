import { useMemo } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientType } from '../utils/prop-types';
import PropTypes from 'prop-types';

function Ingredients({ onClick, type, ingredients, ingredientsRequest }) {
   const content = useMemo(
      () => {
         return ingredientsRequest ? (
            null
         ) : (
            ingredients.filter(item => item.type === type).map((item) => {
               return <IngredientCard onClick={onClick} key={item._id} item={item} />;
            })
         );
      },
      [ingredientsRequest, ingredients]
   );

   return (
      <div >
         {content}
      </div>
   )
};

Ingredients.propTypes = {
   onClick: PropTypes.func.isRequired,
   type: PropTypes.string.isRequired,
   ingredients: PropTypes.arrayOf(ingredientType).isRequired,
   ingredientsRequest: PropTypes.bool.isRequired
}

export default Ingredients;