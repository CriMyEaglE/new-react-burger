import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux";
import ingredientsStyles from './ingredient.module.css';


function IngredientCard(props) {
   const dispatch = useDispatch();
   const item = props.element;
   const func = props.onClick;
   return (
      <button onClick={(e) => func(item)}>
         <img src={item.image} />
         <div>
            <p>{item.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <p>{item.name}</p>
      </button >
   )
}

export default IngredientCard;