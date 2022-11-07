import React, { useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ onClose, children }) {
   const element = useMemo(() => document.getElementById("modal"), []);

   return createPortal(
      <>
         <ModalOverlay onClose={onClose}>
            <div className={styles.modal}>
               {children}
            </div>
         </ModalOverlay>
      </>
      , element);

}

export default Modal;