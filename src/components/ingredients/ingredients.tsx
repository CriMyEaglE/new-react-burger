import { useMemo, FC } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import { TIngredient } from '../../utils/type';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';

type TIngredients = {
   onClick: (item: TIngredient) => void,
   type: string,
   ingredients: TIngredient[],
   ingredientsRequest: boolean
}

const Ingredients: FC<TIngredients> = ({ onClick, type, ingredients, ingredientsRequest }) => {
   const content = useMemo(
      () => {
         return ingredientsRequest ? (
            null
         ) : (
            ingredients.filter(item => item.type === type).map((item) => {
               return <IngredientCard onClick={onClick} key={item._id} item={item} />;
            })
         );
      },
      [ingredients]
   );

   return (
      <div >
         {content}
      </div>
   )
};

export default Ingredients;