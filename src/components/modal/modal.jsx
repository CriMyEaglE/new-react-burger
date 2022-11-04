import { useMemo } from 'react'
import { createPortal } from 'react-dom';
import ingredientDetailsStyles from './ingredient-details.module.css';

function Modal(props) {
   const { onClose } = props;

   const element = useMemo(() => document.getElementById("modal"), []);
   return createPortal(
      <div className={ingredientDetailsStyles.modalBackground} onClick={onClose}>
         <div className={ingredientDetailsStyles.modalCard}>
            {props.children}
         </div>
      </div>, element);

}

export default Modal;