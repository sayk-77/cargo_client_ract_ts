import React, { useEffect, useState } from 'react'
import styles from './cargo_type.module.css'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'
import { CargoTypeCard } from './cargo_type_card'

interface CargoType {
  ID: number
  typeName: string
  descriptionType: string
  priceCoeff: number
}

export const CargoType: React.FC = () => {
  const [cargoTypes, setcargoTypes] = useState<CargoType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const getAllCargoTypes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/cargo_type/all`)
      if (response.status === 200) {
        setcargoTypes(response?.data)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    getAllCargoTypes()
  }, [])

  const totalItems = cargoTypes.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTypes = cargoTypes.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.cargo_container}>
      <div className={styles.cargo_content}>
        {totalPages >= 2 && (
          <Pagination pageChange={changePage} currentPage={currentPage} pageCount={totalPages} />
        )}
        <div className={styles.table_cargo}>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Описание</th>
                <th>Коэффицент цены</th>
              </tr>
            </thead>
            <tbody>
              {currentTypes.map((cargo) => (
                <CargoTypeCard key={cargo.ID} cargoType={cargo} updateCargoTypes={getAllCargoTypes} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
