import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/bruger-ingredients';
import { useState } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {

  const [selectIngredient, setSelectIngredient] = useState(null);
  const handleCloseIngredientsModal = () => {
    setSelectIngredient(null);
  }

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <BurgerIngredients onClick={setSelectIngredient} />
      {!!selectIngredient && (
        <Modal onClose={handleCloseIngredientsModal}>
          <IngredientDetails {...selectIngredient} />
        </Modal>
      )}
    </div>
  );
}

export default App;
