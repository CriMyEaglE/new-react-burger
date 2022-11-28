import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, FC } from 'react';
import { useDrop } from 'react-dnd';
import { getConstructorBun, getConstructorItem, moveConstructorItem, deleteConstructorItem } from '../../services/actions/burger-constructor';
import { v4 as uuidv4 } from 'uuid';
import BurgerItem from "../burger-item/burger-item";
import styles from './burger-constructor.module.css';
import { useDispatch, useSelector } from "../utils/hooks";
import { TIngredient } from "../utils/type";

type TItem = {
   id: string,
   element: TIngredient,
   type: string,
}

const BurgerConstructor: FC = () => {
   const dispatch = useDispatch();
   const store = useSelector(store => store.constructorList.constructorList);

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'ingredient',
      drop: (item: TIngredient) => {
         addConstructorItem(item)
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
      }),
   }))

   const addConstructorItem = (item: TIngredient) => {
      item = { ...item, id: uuidv4() }
      dispatch(getConstructorItem(item))
      dispatch(getConstructorBun(item))
   }
   const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
      dispatch(moveConstructorItem(dragIndex, hoverIndex))
   }, [])
   const deleteItem = (item: TIngredient) => {
      dispatch(deleteConstructorItem(item))
   }
   return (
      <div ref={drop}>
         <div className={styles.bun} >
            {
               store.map((item) => {
                  return item.type === 'bun' &&
                     (<div key={item.id} >
                        <ConstructorElement
                           text={`${item.name} (верх)`}
                           thumbnail={item.image}
                           price={item.price}
                           type="top"
                           isLocked={true} />
                     </div>)
               })
            }
         </div >
         <div className={styles.scroll}>
            {store.map((item: TIngredient, index) => {
               return item.type !== 'bun' &&
                  (<BurgerItem
                     key={item.id}
                     element={item}
                     id={item.id}
                     index={index}
                     deleteElement={() => deleteItem(item)}
                     moveElement={moveItem} />)
            })}
         </div>
         <div className={styles.bun}>
            {store.map((item) => {
               return item.type === 'bun' &&
                  (<div key={item.id}>
                     <ConstructorElement
                        text={`${item.name} (низ)`}
                        thumbnail={item.image}
                        price={item.price}
                        type="bottom"
                        isLocked={true} />
                  </div>)
            })}
         </div>
      </div >

   )
}

export default BurgerConstructor;