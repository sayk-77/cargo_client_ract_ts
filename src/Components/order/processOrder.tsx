import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './processOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { ProfileDashBoard } from '../profile/profileDashBoard'
import { ProcessOrderCard } from './processOrderCard'
import axios from 'axios'

interface Orders {
    ID: number
    orderDate: string
    deliveryDate: string
  }

export const ProcessOrder:React.FC = () => {
    const [orders, setOrders] = useState<Orders[]>([])

    useEffect(() => {
        const token = localStorage.getItem('token')
    
        const getNewOrder = async () => {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_API_URL}/order/status`,
              {status: "Доставляется"},
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
    <section className={styles.processOrder}>
        <ProfileDashBoard />
        <div className={styles.orders_filter}>
            <div className={styles.orders}>
                <div className={styles.order_title}>
                    <p>Номер</p>
                    <p>Дата отправления</p>
                    <p>Дата доставки</p>
                </div>
                {orders?.length > 0 ? (
                  orders.map((order) => (
                    <ProcessOrderCard
                      key={order.ID}
                      orderNumber={order.ID}
                      orderDate={order.orderDate}
                      deliveryDate={order.deliveryDate}
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