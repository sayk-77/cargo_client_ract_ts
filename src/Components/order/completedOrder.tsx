import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './completedOrder.module.css'
import { ProfileDashBoard } from '../profile/profileDashBoard'
// @ts-ignore
import sprite from '../../sprite.svg'
import { CompletedOrderCard } from './completedOrderCard';
import axios from 'axios';

interface Orders {
    ID: number;
    orderDate: string;
    orderPrice: number
    CargoType: {
      typeName: string;
    };
  }

export const CompletedOrder:React.FC = () => {
    const [orders, setOrders] = useState<Orders[]>([])

    useEffect(() => {
      const token = localStorage.getItem('token')
  
      const getNewOrder = async () => {
        try {
          const response = await axios.post(
            'http://192.168.105:5000/order/status',
            {status: "Завершен"},
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
      <section className={styles.completed_order}>
        <ProfileDashBoard />
        <div className={styles.orders_filter}>
            <div className={styles.orders}>
                <div className={styles.order_title}>
                    <p>Номер</p>
                    <p>Дата доставки</p>
                    <p>Тип груза</p>
                    <p>Стоимость</p>
                </div>
                {orders?.length > 0 ? (
                  orders.map((order) => (
                    <CompletedOrderCard
                      key={order.ID}
                      orderNumber={order.ID}
                      orderDate={order.orderDate}
                      typeName={order.CargoType.typeName}
                      orderPrice={order.orderPrice}
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