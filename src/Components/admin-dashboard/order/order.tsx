import React, { useState, useEffect } from 'react'
import styles from './order.module.css'
import { TableOrder } from './table'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'

interface Order {
  ID: number
  status: string
  cargoType: string
  recipient: string
  orderDate: string
  destinationAddress: string
  sendingAddress: string
  deliveryDate: string
  orderPrice: number
  customer: string
  Client: {
    firstName: string
    lastName: string
  }
  CargoType: {
    typeName: string
  }
}

export const Order: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Создан')
  const [allOrders, setAllOrders] = useState<Order[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  useEffect(() => {
    fetchOrders()
  }, [])

  const changeActiveFilter = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/order/all`)
      if (response?.status === 200) {
        setAllOrders(response?.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const filteredOrders = allOrders && allOrders.filter((order) => order.status === activeFilter)

  const totalItems = filteredOrders.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentOrders = filteredOrders.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.order_container}>
      {totalPages > 2 && (
        <Pagination pageCount={totalPages} currentPage={currentPage} pageChange={changePage} />
      )}

      <div className={styles.order_content}>
        <div className={styles.table_order}>
          <div className={styles.filter}>
            <p
              className={activeFilter === 'Создан' ? styles.active_filter : ''}
              onClick={() => changeActiveFilter('Создан')}>
              Новые
            </p>
            <p
              className={activeFilter === 'В процессе' ? styles.active_filter : ''}
              onClick={() => changeActiveFilter('В процессе')}>
              В процессе
            </p>
            <p
              className={activeFilter === 'Завершен' ? styles.active_filter : ''}
              onClick={() => changeActiveFilter('Завершен')}>
              Завершенные
            </p>
          </div>
          <TableOrder status={activeFilter} orders={currentOrders} updateOrder={fetchOrders} />
        </div>
      </div>
    </div>
  )
}
