
function IngredientDetails(props) {
   return (
      <div>
         <h3>Детали игредиента</h3>
         <img src={props.image} />
         <p>{props.name}</p>
      </div>
   )
}

export default IngredientDetails;