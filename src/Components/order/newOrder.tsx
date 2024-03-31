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

  const token = localStorage.getItem('token')

  const getNewOrder = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/order/status`,
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

  useEffect(() => {
    getNewOrder()
  }, [])


  const deleteSuccess = () => {
    getNewOrder()
  }

  return (
    <section className={styles.newOrder}>
      <div className={styles.orders_filter}>
        <div className={styles.orders}>
          <div className={styles.order_title}>
            <p>Номер</p>
            <p>Дата создания</p>
            <p>Тип груза</p>
          </div>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <NewOrderCard
                key={order.ID}
                orderNumber={order.ID}
                orderDate={order.orderDate}
                typeName={order.CargoType.typeName}
                updateOrders={deleteSuccess}
              />
            ))
          ) : (
            <p className={styles.notOrder}>У вас еще нет заказов 😞</p>
          )}
        </div>
      </div>
    </section>
  )
}