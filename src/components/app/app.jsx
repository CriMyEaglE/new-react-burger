import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/bruger-ingredients';
import { useState } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredientDetails, removeIngredientDetails } from '../../services/actions/ingredient-details';
import { useDispatch } from 'react-redux';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [element, setElement] = useState({});
  const dispatch = useDispatch();

  const handleOpenIngredientDetails = (el) => {
    dispatch(getIngredientDetails(el))
    setElement(el);
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
    dispatch(removeIngredientDetails());
  }

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <BurgerIngredients onClick={handleOpenIngredientDetails} />
      {
        isOpen
          ?
          <Modal onClose={closeModal} > <IngredientDetails onClick={closeModal}{...element} /></Modal>
          :
          null
      }
    </div >
  );
}

export default App;
