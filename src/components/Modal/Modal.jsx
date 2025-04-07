import ReactModal from 'react-modal';
import s from './Modal.module.css';
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {

    useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset'; 
  };
    }, [isOpen]);
    
  return (
    <ReactModal
      overlayClassName={s.backdrop}
      isOpen={isOpen}
      className={s.modal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      <button className={s.closeBtn} onClick={onClose}>
        <IoCloseOutline size={24}/>
      </button>
      {children}
    </ReactModal>
  );
}