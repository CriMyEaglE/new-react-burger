import { FC, useMemo } from 'react';
import { useSelector } from '../../utils/hooks';
import { TIngredient, TOrder } from '../../utils/type';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory, useLocation } from 'react-router-dom';
interface IIngredients {
   ingredients: TIngredient[]
}
const OrderCard: FC<{ order: TOrder }> = ({ order }) => {
   const location = useLocation();
   const history = useHistory();
   const openOrderDetails = () => {
      const { number } = order;
      const url = `/feed/:${number}`;
      history.push({
         pathname: url,
         state: {
            background: location,
            element: order
         }
      })
   }
   let price = 0;
   const { ingredients }: IIngredients = useSelector(state => state.ingredients);
   const totalPrice = useMemo(() => {
      order.ingredients.forEach((id) => {
         ingredients.forEach(item => {
            if (item._id === id && item.type === 'bun') {
               price = price + item.price * 2;
            } else
               if (item._id === id && item.type !== 'bun') {
                  price = price + item.price;
               }
         })
      });
      return price;
   }, [order])
   return (
      <div className={styles.order} onClick={openOrderDetails}>
         <div className={`${styles.order__title}`}>
            <h1 className={`text text_type_digits-default`}>#{order.number}</h1>
            <p className={`${styles.order__title_createdAt} text text_type_digits-default text_color_inactive`}>{order.createdAt.slice(5, 10)}, {order.createdAt.slice(11, 16)} i-GMT+3</p>

         </div>
         <h2 className={`${styles.order__subtitle} text text_type_main-default`}>{order.name}</h2>
         <div className={styles.order__two_column}>
            <div className={styles.order__images_container}>
               {order.ingredients.map((item, index) => {
                  if (index < 6)
                     return <div key={index} style={{ position: 'absolute', left: `${index * 44}px` }} ><Image id={item} /></div>
                  if (index >= 6)
                     return <div key={index} style={{ position: 'absolute', left: `${index - 4 * 44}px` }} ><Image id={item} /></div>
               })}
               {order.ingredients.length > 6 ? <p className={`${styles.order__count} text text_type_digits-small`} style={{ zIndex: order.ingredients.length }}>+{order.ingredients.length - 6}</p> : null}
            </div>
            <p className={`${styles.order__price} text text_type_digits-default`}>{totalPrice}<CurrencyIcon type='primary' /></p>
         </div>
      </div>
   )
};

const Image: FC<{ id: string }> = ({ id }) => {
   const { ingredients }: IIngredients = useSelector(state => state.ingredients);
   return (
      <>
         {ingredients.map((item, index) => {
            if (item._id === id) return <img key={index} src={item.image_mobile} className={styles.order__image} />
         })}
      </>
   )
};

export default OrderCard;