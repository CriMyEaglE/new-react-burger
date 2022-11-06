import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/bruger-ingredients';
import { useState } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredientDetails, removeIngredientDetails } from '../../services/actions/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [element, setElement] = useState({});
  const dispatch = useDispatch();

  const openIngredientDetails = (el) => {
    dispatch(getIngredientDetails(el))
    setElement(el);
    console.log(element)
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
    dispatch(removeIngredientDetails());
  }

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex' }}>
          <BurgerIngredients onClick={openIngredientDetails} />
          <BurgerConstructor />
        </div>
      </DndProvider>
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
