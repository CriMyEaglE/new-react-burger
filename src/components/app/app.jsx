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
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Registration from '../../pages/registration/registration';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import ResetPassword from '../../pages/reset-password/reset-password';
import Ingredient from '../../pages/ingredient/ingredient';
import NotFound from '../../pages/not-found/not-found';
import { ProtectedRoute } from '../../pages/protected-route/protected-route';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [element, setElement] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector(state => state.constructorList.constructorList);
  const location = useLocation();
  const background = location.state && location.state.background;
  const history = useHistory();
  const { urlId } = useSelector(state => state.ingredientDetails.ingredientDetails);

  const id = useMemo(() => {
    return store.map(element => element._id)
  }, [store])

  const openIngredientDetails = (el) => {
    const id = el._id;
    const url = `/ingredients/:${id}`;
    window.history.pushState(null, '', url);
    sessionStorage
      .setItem('ingredient', JSON.stringify(el));
    dispatch(getIngredientDetails(el))
    setElement(el);
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
    dispatch(removeIngredientDetails());
    history.replace('/');
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
    <DndProvider backend={HTML5Backend}>
      <div className={appStyles.app}>
        <AppHeader />
        <Switch location={background || location}>
          <Route path={`/ingredients/:${urlId}`}>
            <Ingredient />
          </Route>
          <Route path='/forgot-password' exact={true}>
            <ForgotPassword />
          </Route>
          <Route path='/register' exact={true}>
            <Registration />
          </Route>
          <Route path='/login' exact={true}>
            <Login />
          </Route>
          <ProtectedRoute path='/profile' exact={true}>
            <Profile />
          </ProtectedRoute>
          <Route path='/reset-password' exact={true}>
            <ResetPassword />
          </Route>
          <Route path='/' exact={true}>
            <main>
              <div className={styles.app_container}>
                <BurgerIngredients onClick={openIngredientDetails} />
                <div className={styles.constructor_container}>
                  <BurgerConstructor />
                  <div className={styles.order_button_container}>
                    <Price />
                    <Button type='primary' size='medium' onClick={openOrderDetails} htmlType={'submit'}>Оформить заказ</Button>
                  </div>
                </div>
              </div>
            </main>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        {
          isOpen
            ?
            <Modal onClose={closeModal} >
              {element
                ?
                <IngredientDetails onClick={closeModal} item={element} />
                :
                <OrderDetails onClick={closeModal} />}
            </Modal>
            :
            null
        }
      </div>
    </DndProvider>
  );
}

export default App;
