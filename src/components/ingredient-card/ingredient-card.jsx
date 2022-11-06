import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from './ingredient.module.css';
import { useDrag } from 'react-dnd';


function IngredientCard(props) {
   const item = props.element;
   const func = props.onClick;

   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'ingredient',
      item: item,
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }));

   return (
      <button onClick={(e) => func(item)} ref={drag} style={{ border: isDragging ? '5px solid pink' : 'none' }}>
         <img src={item.image} />
         <div>
            <p>{item.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <p>{item.name}</p>
      </button >
   )
}

export default IngredientCard;