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
  const [activeFilter, setActiveFilter] = useState('Создан')
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
              activeFilter === 'Создан'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('Создан')}>
            Новые
          </p>
          <p
            className={
              activeFilter === 'В процессе'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('В процессе')}>
            В процессе
          </p>
          <p
            className={
              activeFilter === 'Завершен'
                ? `${styles.filter_item} ${styles.active}`
                : styles.filter_item
            }
            onClick={() => handleFilterClick('Завершен')}>
            Завершенные
          </p>
        </div>
        <button onClick={createOrder}>Создать</button>
      </div>

      {activeFilter === 'Создан' && <NewOrder />}
      {activeFilter === 'В процессе' && <ProcessOrder />}
      {activeFilter === 'Завершен' && <CompletedOrder />}
    </div>
  )
}
