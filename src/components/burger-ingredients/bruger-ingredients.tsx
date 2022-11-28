import { useEffect, useState, FC, useRef, useCallback } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bruger-ingredients.module.css';
import Ingredients from '../ingredients/ingredients';
import { getIngredients } from '../../services/actions/ingredients-api';
import { useDispatch, useSelector } from '../../utils/hooks';
import { TIngredient } from '../../utils/type';

type TBurgerIngredients = {
   onClick: (item: TIngredient) => void
}

const BurgerIngredients: FC<TBurgerIngredients> = ({ onClick }) => {
   const dispatch = useDispatch();
   const { ingredients, ingredientsRequest } = useSelector(store => store.ingredients);

   const buns = useRef<HTMLParagraphElement>(null);
   const mains = useRef<HTMLParagraphElement>(null);
   const sauces = useRef<HTMLParagraphElement>(null);
   const scroll = useRef<HTMLDivElement>(null)
   const [current, setCurrent] = useState('one');

   const scrollTo = useCallback((value: string) => {
      value === 'one'
         ? buns.current?.scrollIntoView({ behavior: 'smooth' })
         : value === 'two'
            ? sauces.current?.scrollIntoView({ behavior: 'smooth' })
            : mains.current?.scrollIntoView({ behavior: 'smooth' })
      setCurrent(value)
   }, [])


   useEffect(() => {
      dispatch(getIngredients());
      const tabs = [
         buns.current,
         sauces.current,
         mains.current
      ]
      const options = {
         root: scroll.current
      }

      const callback = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
               if (entry.target === buns.current) {
                  setCurrent('one')
               }
               if (entry.target === sauces.current) {
                  setCurrent('two')
               }
               if (entry.target === mains.current) {
                  setCurrent('three')
               }
            }
         })

      }
      const observer = new IntersectionObserver(callback, options);
      tabs.forEach((tab) => {
         if (tab)
            observer.observe(tab);
      });
   }, [dispatch]);

   return (
      <div>
         <h1 className={'mt-15 text text_type_main-large'}>Соберите бургер</h1>

         <div className={`${styles.tab_container} mt-5`}>
            <div onClick={() => scrollTo('one')} className='tab' id='one'>
               <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                  Булки
               </Tab>
            </div>
            <div onClick={() => scrollTo('two')} className='tab' id='two'>
               <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                  Соусы
               </Tab>
            </div>
            <div onClick={() => scrollTo('three')} className='tab' id='three'>
               <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                  Начинки
               </Tab>
            </div>
         </div>

         <div className={styles.scroll}>
            <h2 className={'mt-8'} ref={buns}>Булки</h2>
            <div className={`${styles.bun} section`} id='one'>
               <Ingredients onClick={onClick} type={'bun'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'} ref={sauces}>Соусы</h2>
            <div className={`${styles.sauce} section`} id='two'>
               <Ingredients onClick={onClick} type={'sauce'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
            <h2 className={'mt-15'} ref={mains}>Начинки</h2>
            <div className={`${styles.main} section`} id='three'>
               <Ingredients onClick={onClick} type={'main'} ingredients={ingredients} ingredientsRequest={ingredientsRequest} />
            </div>
         </div>

      </div>
   )
}

export default BurgerIngredients;

