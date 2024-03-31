import React from 'react'
// @ts-ignore
import styles from './car_card.module.css'

export const CarCard:React.FC = () => {
  return (
    <div className={styles.card_container}>
        <p className={styles.car_model}>Mercedes-Benz Actros</p>
        <img src="/assets/car_mers.png" alt="" />
        <div className={styles.car_detail}>
            <ul>
                <li>Дата выпуска:</li>
                <li>Цвет:</li>
                <li>Пробег:</li>
                <li>Техническое состояние</li>
            </ul>
            <ul>
                <li>01-12-2000</li>
                <li>Белый</li>
                <li>54 000</li>
                <li>Отличное</li>
            </ul>
        </div>
    </div>
  )
}