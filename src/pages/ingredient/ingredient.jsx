import styles from './ingredient.module.css';

function Ingredient() {
  const ingredient = JSON.parse(sessionStorage.getItem('ingredient'));
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text_type_main-large`}>Детали ингредиента</h2>
      <img className={styles.image}
        id={ingredient._id}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <h3 className={`${styles.caption} text_type_main-medium`}>{ingredient.name}</h3>
      <div className={styles.table}>
        <p className="text_type_main-small">
          Калории,ккал
        </p>
        <p className="text_type_main-small">
          Белки, г
        </p>
        <p className="text_type_main-small">
          Жиры, г
        </p>
        <p className="text_type_main-small">
          Углеводы, г
        </p>
        <p className="text_type_digits-default">
          {ingredient.calories}
        </p>
        <p className="text_type_digits-default">
          {ingredient.proteins}
        </p>
        <p className="text_type_digits-default">
          {ingredient.fat}
        </p>
        <p className="text_type_digits-default">
          {ingredient.carbohydrates}
        </p>
      </div>
    </div>
  )
};

export default Ingredient;
