import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './newOrder.module.css'
import { ProfileDashBoard } from '../profile/profileDashBoard'
import { NewOrderCard } from './newOrderCard'
import axios from 'axios'

interface Orders {
  ID: number;
  orderDate: string;
  CargoType: {
    typeName: string;
  };
}

export const NewOrder: React.FC = () => {
  const [orders, setOrders] = useState<Orders[]>()

  useEffect(() => {
    const token = localStorage.getItem('token')

    const getNewOrder = async () => {
      try {
        const response = await axios.post(
          'http://192.168.105:5000/order/status',
          {status: "Создан"},
          {
            headers: { Authorization: token },
          },
        )

        const data = await response.data
        setOrders(data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewOrder()
  }, [])

  return (
    <section className={styles.newOrder}>
      <ProfileDashBoard />
      <div className={styles.orders_filter}>
        <div className={styles.orders}>
          <div className={styles.order_title}>
            <p>Номер</p>
            <p>Дата создания</p>
            <p>Тип груза</p>
          </div>
          {orders?.map((order) => (
            <NewOrderCard
              key={order.ID}
              orderNumber={order.ID}
              orderDate={order.orderDate}
              typeName={order.CargoType.typeName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
