import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientDetails(props) {
   return (
      <div>
         <div>
            <h3>Детали игредиента</h3>
         </div>
         <img src={props.image} />
         <table>
            <caption>{props.name}</caption>
            <tr>
               <th>Калории, ккал</th>
               <th>Белки, г</th>
               <th>Жиры, г</th>
               <th>Глеводы, г</th>
            </tr>
            <tr>
               <td>{props.calories}</td>
               <td>{props.proteins}</td>
               <td>{props.fat}</td>
               <td>{props.carbohydrates}</td>
            </tr>
         </table>
      </div>
   )
}

export default IngredientDetails;