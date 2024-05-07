import React, { useEffect, useState } from 'react'
import styles from './driver.module.css'
import { DriverCard } from './driverCard'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'

interface Driver {
  ID: number
  firstName: string
  lastName: string
  licenseNumber: string
  transportationCert: string
  status: string
}

export const Driver: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 4

  const getAllDriver = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/driver/all`)
      if (response.status === 200) {
        setDrivers(response?.data)
      }
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(() => {
    getAllDriver()
  }, [])

  const totalItems = drivers.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDrivers = drivers.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.driver_container}>
      <div className={styles.driver_content}>
        {totalPages >= 2 && (
          <Pagination pageCount={totalPages} currentPage={currentPage} pageChange={changePage} />
        )}
        <div className={styles.table_driver}>
          <table>
            <thead>
              <tr>
                <th>Имя Фамилия</th>
                <th>Номер водительского удостоверения</th>
                <th>Номер сертификата на перевозки</th>
              </tr>
            </thead>
            <tbody>
              {currentDrivers.map((driver) => (
                <DriverCard key={driver.ID} driver={driver} updateDrivers={getAllDriver} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
