import React from 'react';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from "react-dnd";
import { ingredientType } from '../utils/prop-types';
import PropTypes from 'prop-types';
import styles from './burger-item.module.css';

function BurgerItem({ element, id, index, deleteElement, moveElement }) {
   const [{ handlerId }, drop] = useDrop({
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
         const dragIndex = item.index;
         const hoverIndex = index
         if (dragIndex === hoverIndex) {
            return
         }
         const hoverBoundingRect = ref.current?.getBoundingClientRect();
         const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
         const clientOffset = monitor.getClientOffset()
         const hoverClientY = clientOffset.y - hoverBoundingRect.top
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

BurgerItem.propTypes = {
   element: ingredientType.isRequired,
   id: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,
   deleteElement: PropTypes.func.isRequired,
   moveElement: PropTypes.func.isRequired,
};

export default BurgerItem;