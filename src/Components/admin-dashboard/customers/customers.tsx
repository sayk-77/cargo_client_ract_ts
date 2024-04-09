import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './customers.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { CustomerCard } from './customerCard'
import axios from 'axios'

interface Customers {
  ID: number
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
  email: string
}

export const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customers[]>([])

  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/client/all`,
        )
        if (response.status === 200) {
          setCustomers(response?.data)
        }
      } catch (ex) {
        console.log(ex)
      }
    }
    getAllCustomers()
  }, [])

  return (
    <div className={styles.customers_container}>
      <div className={styles.customers_content}>
        <Search_pagination />
        <div className={styles.table_customers}>
          <table>
            <thead>
              <tr>
                <th>Имя и Фамилия</th>
                <th>Почта</th>
                <th>Адрес</th>
                <th>Телефон</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <CustomerCard key={customer.ID} customer={customer} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
