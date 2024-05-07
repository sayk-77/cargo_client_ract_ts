import React, { useState } from 'react'
import styles from './car_card.module.css'
import sprite from '../../../sprite.svg'
import { Modal } from './carModal'

interface CarCardProps {
  car: {
    ID: number
    brend: string
    model: string
    year: number
    color: string
    mileage: number
    technicalStatus: string
    imageUrl: string
  }
  carUpdate: () => void
}

export const CarCard: React.FC<CarCardProps> = ({ car, carUpdate }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={styles.card_container}>
      <p className={styles.car_model}>
        {car.brend} {car.model}
      </p>
      <img
        className={styles.imageCar}
        width={300}
        height={200}
        style={{ borderRadius: '10px' }}
        src={`${import.meta.env.VITE_SERVER_API_URL}/${car.imageUrl}`}
        alt="Car Image"
      />
      <div className={styles.car_detail}>
        <ul>
          <li>Дата выпуска:</li>
          <li>Цвет:</li>
          <li>Пробег:</li>
          <li>Техническое состояние</li>
        </ul>
        <ul>
          <li>{car.year}</li>
          <li>{car.color}</li>
          <li>{car.mileage}</li>
          <li>{car.technicalStatus}</li>
        </ul>
      </div>
      <svg className={styles.edit} height={24} width={24} style={{ cursor: 'pointer' }} onClick={openModal}>
        <use xlinkHref={sprite + '#edit'}></use>
      </svg>
      {showModal && <Modal car={car} isOpen={showModal} onClose={closeModal} carUpdate={carUpdate}/>}
    </div>
  )
}
