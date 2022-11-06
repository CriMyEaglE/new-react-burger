import { useSelector } from 'react-redux';
function OrderDetails() {
   const id = useSelector(store => store.orderDetails.id);
   return (
      <div>
         <h2>{id}</h2>
         <h3>идентификатор заказа</h3>
         <img alt='Заказ готовится' />
         <p>Ваш заказ начали готовить</p>
         <p>Дождитесь готовности на орбитальной станции</p>
      </div>
   )
}

export default OrderDetails;