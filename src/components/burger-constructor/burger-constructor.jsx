import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getConstructorBun, getConstructorItem, moveConstructorItem, deleteConstructorItem } from '../../services/actions/burger-constructor';
import { v4 as uuidv4 } from 'uuid';
import BurgerItem from "../burger-item/burger-item";

function BurgerConstructor() {
   const dispatch = useDispatch();
   const store = useSelector(store => store.constructorList.constructorList);

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'ingredient',
      drop: (item) => addConstructorItem(item),
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
      }),
   }))

   const addConstructorItem = (item) => {
      item = { ...item, id: uuidv4() }
      dispatch(getConstructorItem(item))
      dispatch(getConstructorBun(item))
   }
   const moveItem = useCallback((dragIndex, hoverIndex) => {
      dispatch(moveConstructorItem(dragIndex, hoverIndex))
   }, [])
   const deleteItem = (item) => {
      dispatch(deleteConstructorItem(item))
   }
   return (
      <div ref={drop}>
         <div>
            {store.map((item) => {
               return item.type === 'bun' &&
                  (<div key={item.id} >
                     <ConstructorElement
                        text={`${item.name} (верх)`}
                        thumbnail={item.image}
                        price={item.price}
                        type="top"
                        isLocked={true} />
                  </div>)
            })}
         </div>
         <div style={{ minHeight: '100px', width: '600px' }}>
            {store.map((item, index) => {
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
         <div>
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
      </div>

   )
}

export default BurgerConstructor;