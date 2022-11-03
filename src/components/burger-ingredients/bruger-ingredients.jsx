import React, { useEffect, useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import burgerIngredientsStyles from './bruger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function BurgerIngredients({ onClick }) {



   const [open, setOpen] = useState(false);

   const handleOpen = (e) => {
      setOpen(true);
      console.log(e.onClick)
   }

   const handleClose = () => {
      setOpen(false);
   }

   const [current, setCurrent] = React.useState('one')

   const [initialIngredients, setinitialIngredients] = useState([{
      _id: '',
      name: '',
      type: '',
      proteins: '',
      fat: '',
      carbohydrates: '',
      calories: '',
      price: '',
      image: '',
      image_mobile: '',
      image_large: '',
      itemIndex: ''
   }]);

   useEffect(() => {
      fetch('https://norma.nomoreparties.space/api/ingredients')
         .then(res => res.json())
         .then(data => setinitialIngredients(data.data));
   }, []);

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
         <div>{initialIngredients.filter(item => item.type === 'bun').map(item => <Ingredient key={item._id} onClick={handleSelectIngredient} {...item} />)}</div>
         <h2>Соусы</h2>
         <div>{initialIngredients.filter(item => item.type === 'sauce').map(item => <Ingredient key={item._id} onClick={handleSelectIngredient}  {...item} />)}</div>
         <h2>Начинки</h2>
         <div>{initialIngredients.filter(item => item.type === 'main').map(item => <Ingredient key={item._id} onClick={handleSelectIngredient} {...item} />)}</div>


      </div>



   )
}

export default BurgerIngredients;