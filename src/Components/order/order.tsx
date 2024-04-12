import React, { useState } from 'react'
import styles from './order.module.css'
import { NewOrder } from './newOrder'
import { ProcessOrder } from './processOrder'
import { CompletedOrder } from './completedOrder'
import { useNavigate } from 'react-router-dom'

interface Order {
  ID: number
  status: string
  cargoType: string
  price: number
  customer: string
}

export const Order: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('new')
  const navigate = useNavigate()

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

  const createOrder = (): void => {
    navigate('/create')
  }

  return (
    <div className={styles.order_container}>
      <div className={styles.filter}>
        <div className={styles.order_filter}>
          <p
            className={
              activeFilter === 'new'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('new')}>
            Новые
          </p>
          <p
            className={
              activeFilter === 'inProgress'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('inProgress')}>
            В процессе
          </p>
          <p
            className={
              activeFilter === 'completed'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('completed')}>
            Завершенные
          </p>
        </div>
        <button onClick={createOrder}>Создать</button>
      </div>

      {activeFilter === 'new' && <NewOrder />}
      {activeFilter === 'inProgress' && <ProcessOrder />}
      {activeFilter === 'completed' && <CompletedOrder />}
    </div>
  )
}
