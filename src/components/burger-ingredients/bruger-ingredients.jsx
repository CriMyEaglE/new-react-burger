import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './bruger-ingredients.module.css';
import { Ingredients } from '../ingredients/ingredients';

function BurgerIngredients({ onClick }) {

   const [current, setCurrent] = React.useState('one')

   const handleSelectIngredient = onClick;

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
         <Ingredients onClick={handleSelectIngredient} type={'bun'} />
         <h2>Соусы</h2>
         <Ingredients onClick={handleSelectIngredient} type={'sauce'} />
         <h2>Начинки</h2>
         <Ingredients onClick={handleSelectIngredient} type={'main'} />

      </div>
   )
}

export default BurgerIngredients;