import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/bruger-ingredients';
import { useState, useMemo } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredientDetails, removeIngredientDetails } from '../../services/actions/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Price from '../price/price';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import { getOrderDetails } from '../../services/actions/order-details';
import styles from './app.module.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [element, setElement] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector(state => state.constructorList.constructorList);

  const id = useMemo(() => {
    return store.map(element => element._id)
  }, [store])

  const openIngredientDetails = (el) => {
    dispatch(getIngredientDetails(el))
    setElement(el);
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
    dispatch(removeIngredientDetails());
  }

  const openOrderDetails = () => {
    setElement(false)
    getOrderRequest();
    setOpen(!isOpen);
  }

  const getOrderRequest = () => {
    dispatch(getOrderDetails(id))
  }

  return (
    <div>
      <div className={appStyles.app}>
        <AppHeader />
        <main>
          <DndProvider backend={HTML5Backend}>
            <div className={styles.app_container}>
              <BurgerIngredients onClick={openIngredientDetails} />
              <div className='mt-30'>
                <BurgerConstructor />
                <div className={`${styles.order_button_container} mt-10`}>
                  <Price />
                  <Button type='primary' size='medium' onClick={openOrderDetails} htmlType={'submit'}>Оформить заказ</Button>
                </div>
              </div>
            </div>
          </DndProvider>
          {
            isOpen
              ?
              <Modal onClose={closeModal} >
                {element
                  ?
                  <IngredientDetails onClick={closeModal}{...element} />
                  :
                  <OrderDetails onClick={closeModal} />}
              </Modal>
              :
              null
          }
        </main >
      </div>
    </div>
  );
}

export default App;
