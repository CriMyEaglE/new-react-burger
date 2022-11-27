import { useMemo, ReactNode, FC } from 'react'
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TModal = {
   onClose: () => void,
   children: ReactNode
}

const Modal: FC<TModal> = ({ onClose, children }) => {
   return createPortal(
      <ModalOverlay onClose={onClose}>
         <div className={styles.modal}>
            <div onClick={onClose} className={styles.close_icon}>
               <CloseIcon type='primary' />
            </div>
            {children}
         </div>
      </ModalOverlay>
      , document.getElementById('modal') as HTMLDivElement);

}

export default Modal;