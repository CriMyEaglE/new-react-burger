import styles from './order-details.module.css';
import accept from '../../images/done.png';
import { useDispatch, useSelector } from '../../utils/hooks';
import { FC, useEffect } from 'react';
import { wsConnectionClosed, wsConnectionOpened } from '../../services/actions/websocket-all-orders';

type TOrderDetailsOnClick = {
   onClick: () => void
}
const OrderDetails: FC<TOrderDetailsOnClick> = ({ onClick }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(wsConnectionOpened());
      return () => {
         dispatch(wsConnectionClosed());
      };
   }, []);
   const id = useSelector(store => store.orderDetails.id);
   const currentOrderNumber = Number(useSelector(state => state.webSocketAllOrders.total)) + 1;
   console.log(useSelector(state => state.webSocketAllOrders.total))
   return (
      <div className={styles.container}>
         <h2 className={'mt-30 text text_type_digits-large'}>{currentOrderNumber}</h2>
         <h3 className={'mt-8 text text_type_main-medium'}>идентификатор заказа</h3>
         <img className={`${styles.image} mt-15`}
            src={accept}
            alt='Заказ подтвержден'
            onClick={onClick}
         />
         <p className={'mt-15 text text_type_main-small'}>
            Ваш заказ начали готовить
         </p>
         <p className={'mt-2 mb-30 text text_type_main-small'} >
            Дождитесь готовности на орбитальной станции
         </p>
      </div>
   )
}

export default OrderDetails;