import React, { useEffect, useState } from 'react'
import styles from './driver.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { DriverCard } from './driverCard'
import axios from 'axios'

interface Driver {
  ID: number
  firstName: string
  lastName: string
  licenseNumber: string
  transportationCert: string
}

export const Driver: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([])

  useEffect(() => {
    const getAllDriver = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/driver/all`,
        )
        if (response.status === 200) {
          setDrivers(response?.data)
        }
      } catch (er) {
        console.log(er)
      }
    }
    getAllDriver()
  }, [])

  return (
    <div className={styles.driver_container}>
      <div className={styles.driver_content}>
        <Search_pagination />
        <div className={styles.table_driver}>
          <table>
            <thead>
              <tr>
                <th>Имя | Фамилия</th>
                <th>Стаж вождения</th>
                <th>Номер водительского удостоверения</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <DriverCard key={driver.ID} driver={driver} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
