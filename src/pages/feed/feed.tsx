import { FC, useEffect, useState, useMemo } from 'react';
import { useSelector } from '../../utils/hooks';
import { TIngredient } from '../../utils/type';
import styles from './feed.module.css';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IIngredients {
   ingredients: TIngredient[]
}


const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
const Feed: FC = () => {
   return (
      <div className={styles.feed}>
         <h1 className={styles.feed__title}>Лента заказов</h1>
         <div className={styles.two_column}>
            <section className={`${styles.scroll} mr-15`}>
               <Orders />
            </section>
            <section>
               <StatusBoard />
            </section>
         </div>
      </div>
   )
};

type TData = {
   success: boolean,
   orders: TOrder[],
   total: number,
   totalToday: number
}

const StatusBoard: FC = () => {
   const [data, setData] = useState<TData>();
   useEffect(() => {
      ws.addEventListener('message', (e) => {
         setData(JSON.parse(e.data));
      })
   }, [])
   console.log(data)
   return (
      <div className={styles.board__list}>
         <div className={styles.board__two_column}>
            <div className='mr-9'>
               <h1 className={`${styles.board__title} text text_type_main-medium`}>Готовы:</h1>
               <div className={styles.container}>
                  <ul className={styles.order_done}>
                     {data?.orders.map((item, index) => { if (item.status === 'done' && index < 5) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_done}>
                     {data?.orders.map((item, index) => { if (item.status === 'done' && index > 5 && index < 11) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_done}>
                     {data?.orders.map((item, index) => { if (item.status === 'done' && index > 10 && index < 16) { return <li key={index} className={`${styles.order_done_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
               </div>

            </div>
            <div>
               <h1 className={`${styles.board__title} text text_type_main-medium`}>В работе:</h1>
               <div className={styles.container}>
                  <ul className={styles.order_pending}>
                     {data?.orders.map((item, index) => { if (item.status === 'pending' && index < 5) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_pending}>
                     {data?.orders.map((item, index) => { if (item.status === 'pending' && index > 5 && index < 11) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
                  <ul className={styles.order_pending}>
                     {data?.orders.map((item, index) => { if (item.status === 'pending' && index > 10 && index < 16) { return <li key={index} className={`${styles.order_pending_number} text text_type_digits-default`}>{item.number}</li> } })}
                  </ul>
               </div>
            </div>
         </div>
         <div>
            <h2 className='text text_type_main-medium mt-15'>Выполнено за все время:</h2>
            <p className={`${styles.order__total} text text_type_digits-large`}>{data?.total}</p>
         </div>
         <div>
            <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
            <p className={`${styles.order__total} text text_type_digits-large`}>{data?.totalToday}</p>
         </div>
      </div>
   )
};
type TOrder = {
   createdAt: string,
   ingredients: string[],
   name: string,
   number: number,
   status: string,
   updateAt: string,
   _id: string
};
const Orders: FC = () => {
   const [orders, setOrders] = useState<TOrder[]>([]);
   useEffect(() => {
      ws.addEventListener('message', (e) => {
         setOrders(JSON.parse(e.data).orders);
      })
   }, [])
   return (
      <>
         {
            orders.map((order, index) => <Order key={index} order={order} />)
         }
      </>
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
}

const Order: FC<{ order: TOrder }> = ({ order }) => {
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
   console.log(order.ingredients.length)
   return (
      <div className={styles.order}>
         <div className={`${styles.order__title}`}>
            <h1 className={`text text_type_digits-default`}>#{order.number}</h1>
            <p className={`${styles.order__title_createdAt} text text_type_digits-default text_color_inactive`}>{order.createdAt.slice(5, 10)}, {order.createdAt.slice(11, 16)} i-GMT+3</p>

         </div>
         <h2 className={`${styles.order__subtitle} text text_type_main-default`}>{order.name}</h2>
         <div className={styles.order__two_column}>
            <div className={styles.order__images_container}>
               {order.ingredients.map((item, index) => {
                  if (index < 6)
                     return <div style={{ position: 'absolute', left: `${index * 44}px` }} ><Image key={index} id={item} /></div>
                  if (index >= 6)
                     return <div style={{ position: 'absolute', left: `${index - 4 * 44}px` }} ><Image key={index} id={item} /></div>
               })}
               {order.ingredients.length > 6 ? <p className={`${styles.order__count} text text_type_digits-small`} style={{ zIndex: order.ingredients.length }}>+{order.ingredients.length - 6}</p> : null}
            </div>
            <p className={`${styles.order__price} text text_type_digits-default`}>{totalPrice}<CurrencyIcon type='primary' /></p>
         </div>
      </div>
   )
};

export default Feed;