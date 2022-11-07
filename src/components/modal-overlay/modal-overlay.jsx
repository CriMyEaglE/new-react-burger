import { useEffect } from 'react'
import styles from './modal-overlay.module.css';

function ModalOverlay({ onClose, children }) {
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

   return (
      <div className={styles.overlay} id={'modalOverlay'}>
         {children}
      </div>
   );
}
export default ModalOverlay;