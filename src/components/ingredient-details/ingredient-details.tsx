import { TIngredient } from '../../utils/type';
import styles from './ingredient-details.module.css';
import { FC } from 'react';
import { useSelector } from '../../utils/hooks';
import { useParams } from 'react-router-dom';

const IngredientDetails: FC = () => {
   const { ingredients: ingredients } = useSelector(state => state.ingredients);
   const params: { id: string } = useParams();
   const ingredientId = params.id.split(':')[1];
   const item = ingredients.find(item => item._id === ingredientId);
   return (
      <div>
         <h3 className={`${styles.title} text text_type_main-large`}>Детали игредиента</h3>
         <div className={styles.container}>
            <img className={styles.image} src={item?.image} alt={item?.name} />
            <h3 className={`${styles.subtitle} text text_type_main-large`}>{item?.name}</h3>
            <div className={styles.table}>
               <p className="text text_type_main-small text_color_inactive">
                  Калории,ккал
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Белки, г
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Жиры, г
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Углеводы, г
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {item?.calories}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {item?.proteins}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {item?.fat}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {item?.carbohydrates}
               </p>
            </div>
         </div>

      </div>
   )
}

export default IngredientDetails;