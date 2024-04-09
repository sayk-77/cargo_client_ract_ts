import React, { useState } from 'react'
// @ts-ignore
import styles from './dashboard.module.css'
import { DashboardMenu } from './adminDashboard'
import { Order } from '../order/order'
import { CarPark } from '../car_park/carPark'
import { Driver } from '../driver/driver'
import { Customers } from '../customers/customers'
import { MakeOrder } from '../create_order/create_order'
import { QuestionsUsers } from '../questions/questions'

export const Dashboard: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('order')

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem)
  }
  return (
    <div className={styles.dashboard}>
      <DashboardMenu
        activeMenuItem={activeMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      {activeMenuItem === 'order' && <Order />}
      {activeMenuItem === 'car-park' && <CarPark />}
      {activeMenuItem === 'customers' && <Customers />}
      {activeMenuItem === 'driver' && <Driver />}
      {activeMenuItem === 'create-order' && <MakeOrder />}
      {activeMenuItem === 'questions' && <QuestionsUsers />}
    </div>
  )
}
