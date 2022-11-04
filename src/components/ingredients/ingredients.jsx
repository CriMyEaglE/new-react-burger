import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/actions';
import IngredientCard from '../ingredient-card/ingredient-card';

export const Ingredients = ({ onClick, type }) => {
   const ingredientType = type;
   const handleSelectIngredient = onClick;
   const dispatch = useDispatch();

   const { ingredients, ingredientsRequest } = useSelector(store => store.ingredients);

   useEffect(
      () => {
         dispatch(getIngredients());
      },
      [dispatch]
   );

   const content = useMemo(
      () => {
         return ingredientsRequest ? (
            null
         ) : (
            ingredients.filter(item => item.type === ingredientType).map((item, index) => {
               return <IngredientCard onClick={handleSelectIngredient} key={index} {...item} />;
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