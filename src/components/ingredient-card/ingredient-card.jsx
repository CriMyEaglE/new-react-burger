import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux";
import { ADD_INGREDIENT } from "../../services/actions/ingredients-api";
import ingredientsStyles from './ingredient.module.css';


function IngredientCard(props) {
   const dispatch = useDispatch();
   const { burgerIngredientsList } = useSelector(store => store.ingredients);
   console.log(burgerIngredientsList)

   const addIngredient = () => {
      dispatch(ADD_INGREDIENT);
   }

   const handleImageClick = () => { props.onClick(props) };

   return (
      <button onClick={addIngredient}>
         <img src={props.image} onClick={handleImageClick} />
         <div>
            <p>{props.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <p>{props.name}</p>
      </button >
   )
}

export default IngredientCard;