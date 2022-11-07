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
            <img className={styles.image} src={props.image} />
            <table className={styles.table}>
               <caption className={`${styles.subtitle} text text_type_main-medium`}>{props.name}</caption>
               <tr className="text text_type_main-default text_color_inactive">
                  <th>Калории, ккал</th>
                  <th>Белки, г</th>
                  <th>Жиры, г</th>
                  <th>Глеводы, г</th>
               </tr>
               <tr className="text text_type_digits-default text_color_inactive">
                  <td>{props.calories}</td>
                  <td>{props.proteins}</td>
                  <td>{props.fat}</td>
                  <td>{props.carbohydrates}</td>
               </tr>
            </table>
         </div>

      </div>
   )
}

export default IngredientDetails;