import { FC, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import { TIngredient, TOrder } from '../../utils/type';
import styles from './feed.module.css';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { wsConnectionClosed, wsConnectionOpened } from '../../services/actions/websocket-all-orders';
import { useHistory, useLocation } from 'react-router-dom';
import OrderCard from '../../components/order-card/order-card';
import StatusBoard from '../../components/status-board/status-board';


const Feed: FC = () => {
   const location = useLocation();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(wsConnectionOpened());
      return () => {
         dispatch(wsConnectionClosed());
      };
   }, []);

   const { orders: orders } = useSelector(state => state.webSocketAllOrders);
   return (
      <div className={styles.feed}>
         <h1 className={styles.feed__title}>Лента заказов</h1>
         <div className={styles.two_column}>
            <section className={`${styles.scroll} mr-15`}>
               {orders.map((order) => <OrderCard key={order.number} order={order} />)}
            </section>
            <section>
               <StatusBoard />
            </section>
         </div>
      </div>
   )
};



export default Feed;