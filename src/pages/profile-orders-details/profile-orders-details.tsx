import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useEffect, useMemo } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { wsConnectionClosed, wsConnectionOpened } from '../../services/actions/websocket-all-orders';
import { wsProfileConnectionClosed, wsProfileConnectionOpened } from '../../services/actions/websocket-profile-orders';
import { getCookie } from '../../utils/coockie';
import { useDispatch, useSelector } from '../../utils/hooks';
import { TIngredient } from '../../utils/type';
import styles from './profile-orders-details.module.css';
interface IIngredients {
   ingredients: TIngredient[]
}
export const ProfileOrdersDetails: FC = () => {
   const login: boolean = useSelector(state => state.loginUser.login);
   const dispatch = useDispatch();
   const location = useLocation();
   const { orders: orders } = useSelector(state => state.webSocketProfileOrfers);
   const { ingredients }: IIngredients = useSelector(state => state.ingredients);
   const params = useParams();
   console.log(params)
   console.log(login)
   const orderNumber = Number(location.pathname.split(':')[1]);
   const order = orders.find(item => item.number === orderNumber);
   let price = 0;
   const totalPrice = useMemo(() => {
      order?.ingredients.forEach((id) => {
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

   if (!login) {
      <Redirect to={'/login'} />
   }
   useEffect(() => {
      const token = getCookie('access');
      dispatch(wsProfileConnectionOpened(token));
      return () => {
         dispatch(wsProfileConnectionClosed())
      };
   }, [dispatch]);
   useEffect(() => {
      if (location.pathname !== `/profile/orders/:${orderNumber}`)
         dispatch(wsProfileConnectionClosed())
   }, [location, dispatch]);


   return (
      <div className={styles.container}>
         <div className={styles.number}>
            <p className={'text text_type_digits-default'}>#{orderNumber}</p>
         </div>
         <p className={`${styles.name} text text_type_main-medium`}>{order?.name}</p>
         <p className={`${styles.status} text text_type_main-default`}>{order?.status === 'done' ? `????????????????` : `??????????????????`}</p>
         <p className={`${styles.subtitle} text text_type_main-medium`}>C??????????:</p>
         <ul className={styles.scroll} >
            {order && ingredients.filter((item) => order.ingredients.includes(item._id)).map(element => {
               return (<li className={styles.ingredient}
                  key={element._id}>
                  <div className={styles.two_column}>
                     <img className={styles.image}
                        src={element.image_mobile}
                        alt={element.name} />
                     <p className={'text text_type_main-small ml-4'}>{element.name}</p>
                  </div>
                  <p className={`${styles.price} text text_type_digits-default`}>
                     {order.ingredients.map(item => {
                        return ingredients.filter(i => i._id === item);
                     }).reduce((el, item) => {
                        return el.concat(item)
                     })
                        .filter(i => i._id === element._id)
                        .length}x{element.price} <CurrencyIcon type='primary' /></p>

               </li>)
            })
            }
         </ul>
         <div className={styles.footer}>
            {order && <p className={`${styles.timestamp} text text_type_main-default text_color_inactive`}>
               {order.createdAt.slice(5, 10)}, {order.createdAt.slice(11, 16)} i-GMT+3</p>}
            {order && <p className={`${styles.total} text text_type_digits-default`} >
               {totalPrice}<CurrencyIcon type='primary' /></p>}
         </div>
      </div>
   )
};

export default ProfileOrdersDetails;