import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
   return (
      <div>
         <div className={styles.title_container}>
            <h3 className={`${styles.title} text text_type_main-large`}>Детали игредиента</h3>
            <CloseIcon onClick={props.onClick} />
         </div>
         <div className={styles.container}>
            <img className={styles.image} src={props.image} alt={props.name} />
            <h3 className={`${styles.subtitle} text text_type_main-large`}>{props.name}</h3>
            <div className={styles.table}>
               <p className="text text_type_main-small text_color_inactive">
                  Калории,ккал
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Белки, г
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Жиры, г
               </p>
               <p className="text text_type_main-small text_color_inactive">
                  Углеводы, г
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {props.calories}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {props.proteins}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {props.fat}
               </p>
               <p className="text text_type_digits-default text_color_inactive">
                  {props.carbohydrates}
               </p>
            </div>
         </div>

      </div>
   )
}

export default IngredientDetails;