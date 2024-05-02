import React, { useEffect, useState } from 'react'
import styles from './carPark.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { CarCard } from './car_card'
import axios from 'axios'

interface Car {
  ID: number
  brend: string
  model: string
  year: number
  color: string
  mileage: string
  technicalStatus: string
  imageUrl: string
}

export const CarPark: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const getAllCar = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/car/all`)
        if (response.status === 200) {
          setCars(response?.data)
        }
      } catch (er) {
        console.log(er)
      }
    }
    getAllCar()
  }, [])

  return (
    <div className={styles.car_park_container}>
      <div className={styles.car_park_content}>
        <Search_pagination />
        <div className={styles.car_cards}>
          {cars.map((car) => (
            <CarCard key={car.ID} car={car} />
          ))}
        </div>
      </div>
    </div>
  )
}
