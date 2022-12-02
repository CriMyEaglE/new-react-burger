import { FC } from 'react';
import { useSelector } from '../../utils/hooks';
import styles from './status-board.module.css';

const StatusBoard: FC = () => {
   const { orders, total, totalToday } = useSelector(state => state.webSocketAllOrders);
   return (
      <div className={styles.board__list}>
         <div className={styles.board__two_column}>
            <div className='mr-9'>
               <h1 className={`${styles.board__title} text text_type_main-medium`}>Готовы:</h1>
               <div className={styles.container}>
                  <ul className={styles.order_done}>
                     {orders.map((item, index) => { if (item.status === 'done' && index < 5) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_done}>
                     {orders.map((item, index) => { if (item.status === 'done' && index > 5 && index < 11) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_done}>
                     {orders.map((item, index) => { if (item.status === 'done' && index > 10 && index < 16) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
               </div>

            </div>
            <div>
               <h1 className={`${styles.board__title} text text_type_main-medium`}>В работе:</h1>
               <div className={styles.container}>
                  <ul className={styles.order_pending}>
                     {orders.map((item, index) => { if (item.status === 'pending' && index < 5) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_pending}>
                     {orders.map((item, index) => { if (item.status === 'pending' && index > 5 && index < 11) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_pending}>
                     {orders.map((item, index) => { if (item.status === 'pending' && index > 10 && index < 16) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
               </div>
            </div>
         </div>
         <div>
            <h2 className='text text_type_main-medium mt-15'>Выполнено за все время:</h2>
            <p className={`${styles.order__total} text text_type_digits-large`}>{total}</p>
         </div>
         <div>
            <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
            <p className={`${styles.order__total} text text_type_digits-large`}>{totalToday}</p>
         </div>
      </div>
   )
};

export default StatusBoard;