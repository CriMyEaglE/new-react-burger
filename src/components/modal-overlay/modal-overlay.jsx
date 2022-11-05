import { useMemo } from 'react'
import { createPortal } from 'react-dom';
import ingredientDetailsStyles from './ingredient-details.module.css';

function ModalOverlay({ onClose, children }) {
   const element = useMemo(() => document.getElementById("modal"), []);
   return createPortal(
      <div className={ingredientDetailsStyles.modalBackground} onClick={onClose} id={'modalOverlay'}>
         <div className={ingredientDetailsStyles.modalCard}>
            {children}
         </div>
      </div>, element);
}
export default ModalOverlay;