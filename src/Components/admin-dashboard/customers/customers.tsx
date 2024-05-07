import React, { useEffect, useState } from 'react'
import styles from './customers.module.css'
import { CustomerCard } from './customerCard'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'

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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const getAllCustomers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/client/all`)
      if (response.status === 200) {
        setCustomers(response?.data)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  const totalItems = customers.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCustomers = customers.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.customers_container}>
      <div className={styles.customers_content}>
        {totalPages >= 2 && (
          <Pagination pageChange={changePage} currentPage={currentPage} pageCount={totalPages} />
        )}
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
              {currentCustomers.map((customer) => (
                <CustomerCard key={customer.ID} customer={customer} updateClients={getAllCustomers} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
