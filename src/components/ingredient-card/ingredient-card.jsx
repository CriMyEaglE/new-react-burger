import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient.module.css';
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
         <img src={item.image} className={'mr-4 ml-4 mb-1'} />
         <div className={`${styles.price} mb-1`}>
            <p className={'text text_type_main-medium mr-4'}>{item.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <p className={`${styles.name} text text_type_main-small`}>{item.name}</p>
      </button >
   )
}

export default IngredientCard;