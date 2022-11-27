import React, { FC } from 'react';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from "react-dnd";
import styles from './burger-item.module.css';
import { TIngredient } from '../utils/type';

type TBurgerItem = {
   element: TIngredient,
   id: string,
   index: number,
   deleteElement: (element: TIngredient) => void,
   moveElement: (dragIndex: number, hoverIndex: number) => void
}

const BurgerItem: FC<TBurgerItem> = ({ element, id, index, deleteElement, moveElement }) => {
   const [{ handlerId }, drop] = useDrop<TBurgerItem, TBurgerItem, { handlerId: symbol | string | null }>({
      accept: 'item',
      collect(monitor) {
         return {
            handlerId: monitor.getHandlerId()
         }
      },
      hover(item, monitor) {
         if (!ref.current) {
            return
         }
         const dragIndex: number = item.index;
         const hoverIndex: number = index
         if (dragIndex === hoverIndex) {
            return
         }
         const rect: HTMLElement = ref.current
         const hoverBoundingRect: DOMRect = rect?.getBoundingClientRect();
         const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
         const clientOffset = monitor.getClientOffset()
         const hoverClientY: number = clientOffset!.y - hoverBoundingRect.top
         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
         }
         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
         }
         moveElement(dragIndex, hoverIndex)
         item.index = hoverIndex
      }
   })

   const [{ isDragging }, drag] = useDrag({
      type: 'item',
      item: () => {
         return { id, index }
      },

      collect: (monitor) => ({
         isDragging: monitor.isDragging()
      }),

   })
   const ref = React.useRef(null);

   drag(drop(ref));

   return (
      <div
         className={styles.container}
         style={{
            opacity: isDragging ? 0.1 : 1
         }}
         ref={ref}
         id={element.id}
         data-handler-id={handlerId}
      >
         <div><DragIcon type="primary" /></div>
         <div className={styles.item}>
            <ConstructorElement
               text={element.name}
               price={element.price}
               thumbnail={element.image}
               handleClose={() => deleteElement(element)}
            />
         </div>
      </div>
   )
}

export default BurgerItem;