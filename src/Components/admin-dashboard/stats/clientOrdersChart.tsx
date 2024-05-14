import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

interface Order {
  Client: {
    firstName: string
    lastName: string
  }
}

export const ClientOrdersChart: React.FC = () => {
  const [clientOrders, setClientOrders] = useState<{ clientName: string; orderCount: number }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Order[]>(`${import.meta.env.VITE_SERVER_API_URL}/order/all`)
        const orders = response.data

        const ordersByClient: { [key: string]: number } = {}
        orders.forEach((order) => {
          const {
            Client: { firstName, lastName },
          } = order
          const clientName = `${firstName} ${lastName}`
          ordersByClient[clientName] = (ordersByClient[clientName] || 0) + 1
        })

        const dataForChart = Object.entries(ordersByClient).map(([clientName, orderCount]) => ({
          clientName,
          orderCount,
        }))

        setClientOrders(dataForChart)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Рейтинг клиентов по количеству заказов</h2>
      <BarChart
        width={500}
        height={300}
        data={clientOrders}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="clientName" height={0} />
        <YAxis />
        <Tooltip formatter={(value) => [value, 'Заказов']} />
        <Bar dataKey="orderCount" fill="#8f00bf" name="Клиент" />
      </BarChart>
    </div>
  )
}
