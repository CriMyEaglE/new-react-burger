import { useSelector } from 'react-redux';
import styles from './order-details.module.css';
import accept from '../../images/done.png';

function OrderDetails({ onClick }) {
   const id = useSelector(store => store.orderDetails.id);
   return (
      <div className={styles.container}>
         <h2 className={'mt-30 text text_type_digits-large'}>{id}</h2>
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