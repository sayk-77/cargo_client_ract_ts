import React from 'react'
import styles from './stats.module.css'
import { OrdersStats } from './orders'

export const Stats: React.FC = () => {
  return (
    <div className={styles.content}>
      <OrdersStats />
    </div>
  )
}
