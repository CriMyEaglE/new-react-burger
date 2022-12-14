import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/bruger-ingredients';
import { useState, useMemo, FC, useCallback, useEffect } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredientDetails, removeIngredientDetails } from '../../services/actions/ingredient-details';
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
import { useDispatch, useSelector } from '../../utils/hooks';
import { TIngredient } from '../../utils/type';
import { getCookie } from '../../utils/coockie';
import Feed from '../../pages/feed/feed';
import { getIngredients } from '../../services/actions/ingredients-api';
import FeedDetails from '../../pages/feed-details/feed-details';
import ProfileOrders from '../../pages/profile-orders/profile-orders';
import ProfileOrdersDetails from '../../pages/profile-orders-details/profile-orders-details';

type TLocation = ReturnType<typeof useLocation>;
type TUseLocation = {
  [key: string]: string | null | TUseLocation | TLocation,
};

const App: FC = () => {
  const login = !!getCookie('access');
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector(state => state.constructorList.constructorList);
  const location = useLocation<TUseLocation>();
  const background = location.state && location.state.background;
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const id = useMemo(() => {
    store.length > 0 ? setDisabled(false) : setDisabled(true);
    return store.map(element => element._id)
  }, [store])

  useEffect(() => {
    dispatch(getIngredients());
  })
  const openIngredientDetails = useCallback((element: TIngredient): void => {
    const { _id } = element;
    const url = `/ingredients/:${_id}`;
    history.push({
      pathname: url,
      state: {
        background: location,
        element: element
      }
    })
    localStorage
      .setItem('ingredient', JSON.stringify(element));
    dispatch(getIngredientDetails(element))
  }, [dispatch, history, location]);
  const closeModal = () => {
    setOpen(false);
    dispatch(removeIngredientDetails());
    history.push({
      ...location.state.background as TLocation | TUseLocation,
      state: { background: null },
    });
  }

  const openOrderDetails = () => {
    if (login) {
      getOrderRequest();
      setOpen(!isOpen);
    } else {
      history.push('/login');
    }
  }

  const getOrderRequest = () => {
    dispatch(getOrderDetails(id))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={appStyles.app}>
        <AppHeader />
        <Switch location={background as TLocation || location}>
          <Route path='/ingredients/:id'>
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
          <ProtectedRoute path='/profile/orders' exact={true}>
            <ProfileOrders />
          </ProtectedRoute>
          <ProtectedRoute path='/profile/orders/:id' exact={true}>
            <ProfileOrdersDetails />
          </ProtectedRoute>
          <ProtectedRoute path='/reset-password' exact={true}>
            <ResetPassword />
          </ProtectedRoute>
          <Route path='/feed' exact={true}>
            <Feed />
          </Route>
          <Route path={`/feed/:id`}>
            <FeedDetails />
          </Route>
          <Route path='/' exact={true}>
            <main>
              <div className={styles.app_container}>
                <BurgerIngredients onClick={openIngredientDetails} />
                <div className={styles.constructor_container}>
                  <BurgerConstructor />
                  <div className={styles.order_button_container}>
                    <Price />
                    <Button type='primary' size='medium' onClick={openOrderDetails} htmlType='submit' disabled={disabled}>???????????????? ??????????</Button>
                  </div>
                </div>
              </div>
            </main>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        {background &&
          <Route path={`/feed/:id`}>
            <Modal onClose={closeModal} >
              <FeedDetails />
            </Modal>
          </Route>
        }
        {background &&
          <Route path={`/ingredients/:id`}>
            (
            <Modal onClose={closeModal} >
              <IngredientDetails />
            </Modal>
            )</Route>}
        {background &&
          <Route path={`/profile/orders/:id`}>
            (
            <Modal onClose={closeModal} >
              <ProfileOrdersDetails />
            </Modal>
            )
          </Route>}
        {isOpen && <Modal onClose={closeModal} >
          <OrderDetails onClick={closeModal} />
        </Modal>}
      </div>
    </DndProvider>
  );
}

export default App;
