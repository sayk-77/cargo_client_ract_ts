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
              'http://192.168.105:5000/order/status',
              {status: "В процессе"},
              {
                headers: { Authorization: token },
              },
            )
    
            const data = await response.data
            setOrders(data)
            console.log(data);
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
                {orders?.map((order) => (
                    <ProcessOrderCard
                    key={order.ID}
                    orderNumber={order.ID}
                    orderDate={order.orderDate}
                    deliveryDate={order.deliveryDate}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}