import { FC, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { wsProfileConnectionClosed, wsProfileConnectionOpened } from '../../services/actions/websocket-profile-orders';
import { getCookie, setCookie } from '../../utils/coockie';
import { useDispatch, useSelector } from '../../utils/hooks';
import { v4 } from 'uuid';
import OrderCard from '../../components/order-card/order-card';
import styles from './profile-orders.module.css';
import { logoutUserApi } from '../../services/actions/login';

const ProfileOrders: FC = () => {
   const { orders: orders } = useSelector(state => state.webSocketProfileOrfers);
   const i = orders.length;
   const location = useLocation();
   const dispatch = useDispatch();
   const logoutUser = useCallback(() => {
      dispatch(logoutUserApi());
      setCookie('access', '', { expires: -1 });
   }, [dispatch]);
   useEffect(() => {
      const token = getCookie('access');
      dispatch(wsProfileConnectionOpened(token));
   }, [])
   useEffect(() => {
      if (location.pathname !== '/profile/orders')
         dispatch(wsProfileConnectionClosed())
   }, [location, dispatch])
   console.log(orders)
   return (
      <div className={styles.container}>
         <nav className={`${styles.nav} mr-15`}>
            <NavLink
               to={{ pathname: '/profile' }} exact={true}
               className={styles.tab}
               activeClassName={styles.active}>
               <h3 className='text_type_main-medium mt-4 mb-8'>Профиль</h3>
            </NavLink>
            <NavLink
               to={{ pathname: '/profile/orders' }}
               className={styles.tab}
               activeClassName={styles.active}>
               <h3 className='text_type_main-medium mb-8'>История заказов</h3>
            </NavLink>
            <NavLink
               to={{ pathname: '/login' }}
               className={styles.tab}
               activeClassName={styles.active}>
               <h3 onClick={logoutUser} className='text_type_main-medium mb-4'>Выход</h3>
            </NavLink>
            <p className={'text_color_inactive mt-20'}>В этом разделе вы можете
               изменять свои персональные данные</p>
         </nav>
         <div className={styles.orders_container}>
            {orders.map(order => { return <OrderCard order={order} key={v4()} /> })}
         </div>
      </div>
   )
};

export default ProfileOrders;