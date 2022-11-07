import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom';
import styles from './modal-overlay.module.css';

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
      <div className={styles.overlay} id={'modalOverlay'}>
         <div>
            {children}
         </div>
      </div>, element);
}
export default ModalOverlay;