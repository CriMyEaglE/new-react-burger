import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ingredientsStyles from './ingredient.module.css';


function Ingredient(props) {

   const handleImageClick = () => { props.onClick(props) }

   return (
      <button>
         <img src={props.image} onClick={handleImageClick} />
         <div>
            <p>{props.price}</p>
            <CurrencyIcon type="primary" />
         </div>
         <p>{props.name}</p>
      </button >
   )
}

export default Ingredient;