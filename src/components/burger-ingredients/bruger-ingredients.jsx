import React, { useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './bruger-ingredients.module.css';
import { Ingredients } from '../ingredients/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients-api';

function BurgerIngredients({ onClick }) {
   const dispatch = useDispatch();

   const [current, setCurrent] = React.useState('one')

   const handleSelectIngredient = onClick;

   const { ingredients, ingredientsRequest, burgerIngredientsList } = useSelector(store => store.ingredients);


   useEffect(
      () => {
         dispatch(getIngredients());
      },
      [dispatch]
   );
   return (
      <div className={burgerIngredientsStyles.burgerIngredients}>
         <h1>Соберите бургер</h1>

         <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
               Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
               Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
               Начинки
            </Tab>
         </div>

         <h2>Булки</h2>
         <Ingredients onClick={handleSelectIngredient} type={'bun'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
         <h2>Соусы</h2>
         <Ingredients onClick={handleSelectIngredient} type={'sauce'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
         <h2>Начинки</h2>
         <Ingredients onClick={handleSelectIngredient} type={'main'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />

      </div>
   )
}

export default BurgerIngredients;