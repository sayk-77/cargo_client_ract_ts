import React from 'react'
// @ts-ignore
import styles from './carPark.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { CarCard } from './car_card'

export const CarPark:React.FC = () => {
  return (
    <div className={styles.car_park_container}>
        <div className={styles.car_park_content}>
            <Search_pagination />
            <div className={styles.car_cards}>
                <CarCard />
                <CarCard />
            </div>
        </div>
    </div>
  )
}