import React, { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bruger-ingredients.module.css';
import Ingredients from '../ingredients/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients-api';
import PropTypes from 'prop-types';

function BurgerIngredients({ onClick }) {
   const dispatch = useDispatch();

   const [current, setCurrent] = useState('one')

   const { ingredients, ingredientsRequest } = useSelector(store => store.ingredients);

   const bunSection = document.getElementById('bun');
   const saucesSection = document.getElementById('sauces');
   const mainSection = document.getElementById('main');

   const sections = document.querySelectorAll('.section');
   const tabs = document.querySelectorAll('.tab');

   const cb = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            tabs.forEach((tab) => tab.classList.remove("active"));

            const activeId = entry.target.id;
            setCurrent(activeId);
         }
      });
   };

   const sectionObserver = new IntersectionObserver(cb, {
      threshold: 0.6
   });

   sections.forEach((s) => sectionObserver.observe(s));

   function scrollToBunSection() {
      bunSection.scrollIntoView({ block: "start", behavior: "smooth" });
   }

   function scrollToSausecSection() {
      saucesSection.scrollIntoView({ block: "start", behavior: "smooth" });
   }

   function scrollToMainSection() {
      mainSection.scrollIntoView({ block: "start", behavior: "smooth" });
   }

   useEffect(
      () => {
         dispatch(getIngredients());
      },
      [dispatch]
   );
   return (
      <div>
         <h1 className={'mt-15 text text_type_main-large'}>Соберите бургер</h1>

         <div className={`${styles.tab_container} mt-5`}>
            <div onClick={scrollToBunSection} className='tab' id='one'>
               <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                  Булки
               </Tab>
            </div>
            <div onClick={scrollToSausecSection} className='tab' id='two'>
               <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                  Соусы
               </Tab>
            </div>
            <div onClick={scrollToMainSection} className='tab' id='three'>
               <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                  Начинки
               </Tab>
            </div>
         </div>

         <div className={styles.scroll}>
            <h2 className={'mt-8'} id='bun'>Булки</h2>
            <div className={`${styles.bun} section`} id='one'>
               <Ingredients onClick={onClick} type={'bun'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'} id='sauces'>Соусы</h2>
            <div className={`${styles.sauce} section`} id='two'>
               <Ingredients onClick={onClick} type={'sauce'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'} id='main'>Начинки</h2>
            <div className={`${styles.main} section`} id='three'>
               <Ingredients onClick={onClick} type={'main'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
         </div>

      </div>
   )
}

BurgerIngredients.propTypes = {
   onClick: PropTypes.func.isRequired
}

export default BurgerIngredients;

