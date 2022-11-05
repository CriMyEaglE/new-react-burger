import React, { useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom';
import ingredientDetailsStyles from './ingredient-details.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

function Modal({ onClose, children }) {
   const element = useMemo(() => document.getElementById("modal"), []);

   return createPortal(
      <>
         <ModalOverlay onClose={onClose}>
            <div className={ingredientDetailsStyles.modalCard}>
               {children}
            </div>
         </ModalOverlay>
      </>
      , element);

}

export default Modal;