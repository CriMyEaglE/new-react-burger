import { TIngredient } from '../../utils/type';
import styles from './ingredient.module.css';
import { FC } from 'react';
import { useSelector } from '../../utils/hooks';
import { useParams } from 'react-router-dom';

const Ingredient: FC = () => {
  const { ingredients: ingredients } = useSelector(state => state.ingredients);
  const params: { id: string } = useParams();
  const ingredientId = params.id.split(':')[1];
  const item = ingredients.find(item => item._id === ingredientId);
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text_type_main-large`}>Детали ингредиента</h2>
      <img className={styles.image}
        id={item?._id}
        src={item?.image}
        alt={item?.name}
      />
      <h3 className={`${styles.caption} text_type_main-medium`}>{item?.name}</h3>
      <div className={styles.table}>
        <p className="text_type_main-small">
          Калории,ккал
        </p>
        <p className="text_type_main-small">
          Белки, г
        </p>
        <p className="text_type_main-small">
          Жиры, г
        </p>
        <p className="text_type_main-small">
          Углеводы, г
        </p>
        <p className="text_type_digits-default">
          {item?.calories}
        </p>
        <p className="text_type_digits-default">
          {item?.proteins}
        </p>
        <p className="text_type_digits-default">
          {item?.fat}
        </p>
        <p className="text_type_digits-default">
          {item?.carbohydrates}
        </p>
      </div>
    </div>
  )
};

export default Ingredient;
