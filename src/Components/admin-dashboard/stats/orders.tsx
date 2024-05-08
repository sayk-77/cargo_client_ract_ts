import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MonthlyOrdersChart } from './monthlyOrderChart'
import { CargoTypesChart } from './cargoTypesChart'
import { PopularRoutesChart } from './popularRoutes'
import styles from './stats.module.css'
import sprite from '../../../sprite.svg'
import { DriverOrdersChart } from './driverOrderChart'
import { ClientOrdersChart } from './clientOrdersChart'
import { IncomeByMonthChart } from './incomeByMonthChart'

interface Order {
  deliveryDate: string
  sendingAddress: string
  destinationAddress: string
  status: string
  orderPrice: number
  CargoType: {
    typeName: string
  }
}

export const OrdersStats: React.FC = () => {
  const [chartData, setChartData] = useState<{ month: string; orders: number }[]>([])
  const [cargoData, setCargoData] = useState<{ name: string; value: number }[]>([])
  const [popularRoutes, setPopularRoutes] = useState<{ route: string; orders: number }[]>([])
  const [orderStatusCounts, setOrderStatusCounts] = useState<{ [status: string]: number }>({
    Pending: 0,
    InProgress: 0,
    Completed: 0,
  })
  const [allOrderPrices, setAllOrderPrices] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Order[]>(`${import.meta.env.VITE_SERVER_API_URL}/order/all`)
        const orders = response.data

        const ordersByMonth: { [key: string]: number } = {}
        const routeCounts: { [key: string]: number } = {}
        const statusCounts = { Pending: 0, InProgress: 0, Completed: 0 }

        orders.forEach((order) => {
          if (order.status !== 'Создан') {
            const month = new Date(order.deliveryDate).toLocaleString('default', { month: 'long' })
            if (ordersByMonth[month]) {
              ordersByMonth[month]++
            } else {
              ordersByMonth[month] = 1
            }

            const sendingCity = order.sendingAddress.split(',')[0].trim()
            const destinationCity = order.destinationAddress.split(',')[0].trim()
            const route = `${sendingCity} - ${destinationCity}`
            if (routeCounts[route]) {
              routeCounts[route]++
            } else {
              routeCounts[route] = 1
            }

            const price = order.orderPrice
            setAllOrderPrices((prevPrice) => prevPrice + price)

            if (order.status === 'Создан') {
              statusCounts.Pending++
            } else if (order.status === 'В процессе') {
              statusCounts.InProgress++
            } else if (order.status === 'Завершен') {
              statusCounts.Completed++
            }
          }
        })

        const monthData = Object.keys(ordersByMonth).map((month) => ({
          month: month,
          orders: ordersByMonth[month],
        }))

        setChartData(monthData)

        const cargoTypes: { [key: string]: number } = {}
        orders.forEach((order) => {
          const cargoType = order.CargoType?.typeName || 'Unknown'
          if (cargoTypes[cargoType]) {
            cargoTypes[cargoType]++
          } else {
            cargoTypes[cargoType] = 1
          }
        })

        const cargoChartData = Object.keys(cargoTypes).map((type) => ({
          name: type,
          value: cargoTypes[type],
        }))

        setCargoData(cargoChartData)

        const popularRoutesData = Object.keys(routeCounts)
          .map((route) => ({
            route: route,
            orders: routeCounts[route],
          }))
          .sort((a, b) => b.orders - a.orders)
          .slice(0, 5)

        setPopularRoutes(popularRoutesData)

        setOrderStatusCounts(statusCounts)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.container_content}>
      <h2 style={{ textAlign: 'center', paddingBottom: '20px' }}>Статистика по заказам</h2>
      <div className={styles.statusOrder}>
        <p className={styles.pending}>
          <svg height={24} width={24}>
            <use xlinkHref={sprite + '#new_order'}></use>
          </svg>
          На подтверждении: <span style={{ color: 'blue' }}>{orderStatusCounts.Pending}</span>
        </p>
        <p className={styles.inProgress}>
          <svg height={24} width={24}>
            <use xlinkHref={sprite + '#progres'}></use>
          </svg>
          В доставке : <span style={{ color: 'orange' }}>{orderStatusCounts.InProgress}</span>
        </p>
        <p className={styles.completed}>
          <svg height={24} width={24}>
            <use xlinkHref={sprite + '#completed_order'}></use>
          </svg>
          Завершены: <span style={{ color: '#0bd366' }}>{orderStatusCounts.Completed}</span>
        </p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Общий заработок с заказов</h2>
      <div className={styles.money}>
        <svg height={24} width={24}>
          <use xlinkHref={sprite + '#money'}></use>
        </svg>
        <p>{allOrderPrices} рублей</p>
      </div>
      <div className={styles.container_charts}>
        <MonthlyOrdersChart data={chartData} />
        <DriverOrdersChart />
        <ClientOrdersChart />
        <CargoTypesChart data={cargoData} />
        <PopularRoutesChart data={popularRoutes} />
        <IncomeByMonthChart />
      </div>
    </div>
  )
}
