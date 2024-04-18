import React from 'react'
import styles from './modalConfirm.module.css'

interface ModalProps {
  showModal: boolean
  onClose: () => void
  onConfirm: () => void
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>Вы действительно хотите завершить заказ?</p>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm}>Завершить</button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
