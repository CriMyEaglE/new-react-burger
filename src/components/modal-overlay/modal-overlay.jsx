import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom';
import ingredientDetailsStyles from './ingredient-details.module.css';

function ModalOverlay({ onClose, children }) {
   const element = useMemo(() => document.getElementById("modal"), []);

   const closeModalByEsc = ((e) => {
      if (e.key === 'Escape') {
         onClose()
      }
   });
   const closeModalByOverlay = ((e) => {
      if (e.target === document.getElementById('modalOverlay')) {
         onClose()
      }
   })

   useEffect(() => {
      document.addEventListener('keydown', closeModalByEsc);
      document.addEventListener('click', closeModalByOverlay);
      return () => {
         document.removeEventListener('keydown', closeModalByEsc);
         document.removeEventListener('click', closeModalByOverlay);
      }
   }, []);

   return createPortal(
      <div className={ingredientDetailsStyles.modalBackground} id={'modalOverlay'}>
         <div className={ingredientDetailsStyles.modalCard}>
            {children}
         </div>
      </div>, element);
}
export default ModalOverlay;