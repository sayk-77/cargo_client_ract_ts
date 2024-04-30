import React from 'react'
import styles from './car_card.module.css'

interface CarCardProps {
  car: {
    ID: number
    brend: string
    model: string
    year: number
    color: string
    mileage: string
    technicalStatus: string
    imageUrl: string
  }
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
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
    </div>
  )
}
