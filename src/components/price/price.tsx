import { useMemo } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './price.module.css';
import { useSelector } from '../../utils/hooks';
function Price() {

   const store = useSelector(store => store.constructorList.constructorList)

   const totalPrice = useMemo(() => {
      return store.reduce((acc, item) => item.type === 'bun' ? acc + item.price * 2 : acc + item.price, 0);
   }, [store])

   return (
      <div className={`${styles.price} mr-10`}>
         <p className='text text_type_main-medium'>{totalPrice}</p>
         <CurrencyIcon type="primary" />
      </div>
   )
}
export default Price;