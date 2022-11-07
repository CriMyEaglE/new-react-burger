import React, { useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bruger-ingredients.module.css';
import { Ingredients } from '../ingredients/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients-api';

function BurgerIngredients(props) {
   const dispatch = useDispatch();

   const [current, setCurrent] = React.useState('one')

   const { ingredients, ingredientsRequest } = useSelector(store => store.ingredients);

   useEffect(
      () => {
         dispatch(getIngredients());
      },
      [dispatch]
   );
   return (
      <div>
         <h1 className={'mt-15 text text_type_main-large'}>Соберите бургер</h1>

         <div style={{ display: 'flex' }} className={'mt-5'}>
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

         <div className={styles.scroll}>
            <h2 className={'mt-8'}>Булки</h2>
            <div className={styles.bun}>
               <Ingredients onClick={props.onClick} type={'bun'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'}>Соусы</h2>
            <div className={styles.sauce}>
               <Ingredients onClick={props.onClick} type={'sauce'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'}>Начинки</h2>
            <div className={styles.main}>
               <Ingredients onClick={props.onClick} type={'main'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
         </div>

      </div>
   )
}

export default BurgerIngredients;