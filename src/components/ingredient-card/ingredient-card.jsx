import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient.module.css';
import { useDrag } from 'react-dnd';
import { useSelector } from "react-redux";
import { useMemo } from "react";

function IngredientCard({ item, onClick }) {
   const store = useSelector(store => store.constructorList.constructorList);
   const count = useMemo(() => {
      if (item.type === 'bun') {
         return store.filter(el => el._id === item._id).length * 2;
      } else {
         return store.filter(el => el._id === item._id).length;
      }
   }, [item._id, store])
   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'ingredient',
      item: item,
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }));

   return (
      <button onClick={(e) => onClick(item)} ref={drag} style={{ border: isDragging ? '2px solid #8585AD' : 'none', borderRadius: isDragging ? '10%' : 'none' }}>
         <div className={styles.counter}>
            {count ?
               <Counter id={item._id} count={count} />
               : null}
         </div>
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