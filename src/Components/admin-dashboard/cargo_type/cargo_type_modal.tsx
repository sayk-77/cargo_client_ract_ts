import React, { useState } from 'react'
import styles from './cargo_type_modal.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

interface CargoTypeModalProps {
  cargoType: {
    ID: number
    typeName: string
    descriptionType: string
    priceCoeff: number
  }
  updateCargoTypes: () => void
  onClose: () => void
}

export const CargoTypeModal: React.FC<CargoTypeModalProps> = ({ onClose, cargoType, updateCargoTypes }) => {
  const [typeName, setTypeName] = useState(cargoType.typeName)
  const [descriptionType, setDescriptionType] = useState(cargoType.descriptionType)
  const [priceCoeff, setPriceCoeff] = useState(cargoType.priceCoeff)

  const save = async () => {
    const data = {
      ID: cargoType.ID,
      typeName,
      descriptionType,
      priceCoeff,
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/cargo_type/update`, data)
      if (response.status === 200) {
        toast.success('Данные успешно обновлены')
        updateCargoTypes()
        onClose()
      }
    } catch (error) {
      console.error('Error updating cargo type:', error)
      toast.error('Произошла ошибка при обновлении данных')
    }
  }

  const del = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/cargo_type/delete/${cargoType.ID}`,
      )
      if (response.status === 200) {
        toast.success('Тип груза успешно удален')
        updateCargoTypes()
        onClose()
      }
    } catch (error) {
      console.error('Error deleting cargo type:', error)
      toast.error('Произошла ошибка при удалении типа груза')
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <label className={styles.label}>Название типа</label>
        <input
          type="text"
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
          className={styles.modal_input}
          required
        />
        <label className={styles.label}>Описание</label>
        <textarea
          value={descriptionType}
          onChange={(e) => setDescriptionType(e.target.value)}
          className={styles.modal_textarea}
          required
        />
        <label className={styles.label}>Коэффициент цены</label>
        <input
          type="number"
          value={priceCoeff}
          onChange={(e) => setPriceCoeff(parseFloat(e.target.value))}
          className={styles.modal_input}
          required
        />
        <div className={styles.move}>
          <button onClick={del} className={styles.modal_button_del}>
            Удалить
          </button>
          <button onClick={save} className={styles.modal_button}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  )
}
