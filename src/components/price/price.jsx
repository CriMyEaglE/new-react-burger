import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function Price() {

   const store = useSelector(store => store.constructorList.constructorList)

   const totalPrice = useMemo(() => {
      return store.reduce((acc, item) => item.type === 'bun' ? acc + item.price * 2 : acc + item.price, 0);
   }, [store])

   return (
      <div>
         <p>{totalPrice}</p>
         <CurrencyIcon type="primary" />
      </div>
   )
}
export default Price;