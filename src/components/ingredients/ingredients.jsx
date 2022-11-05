import React, { useMemo } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';

export const Ingredients = ({ onClick, type, ingredients, ingredientsRequest }) => {

   const content = useMemo(
      () => {
         return ingredientsRequest ? (
            null
         ) : (
            ingredients.filter(item => item.type === type).map((item, index) => {
               return <IngredientCard onClick={onClick} key={index} {...item} />;
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