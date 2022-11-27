import { useMemo } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';

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

export default Ingredients;