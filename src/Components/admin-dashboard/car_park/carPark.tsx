import React, { useEffect, useState } from 'react'
import styles from './carPark.module.css'
import { CarCard } from './car_card'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'

interface Car {
  ID: number
  brend: string
  model: string
  year: number
  color: string
  mileage: number
  technicalStatus: string
  imageUrl: string
}

export const CarPark: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 4

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

  useEffect(() => {
    getAllCar()
  }, [])

  const totalItems = cars.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCars = cars.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.car_park_container}>
      {totalPages >= 2 && (
        <Pagination currentPage={currentPage} pageCount={totalPages} pageChange={changePage} />
      )}
      <div className={styles.car_park_content}>
        <div className={styles.car_cards}>
          {currentCars.map((car) => (
            <CarCard key={car.ID} car={car} carUpdate={getAllCar} />
          ))}
        </div>
      </div>
    </div>
  )
}
