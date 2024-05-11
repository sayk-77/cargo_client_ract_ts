import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

interface DriverOrder {
  Driver: {
    firstName: string
    lastName: string
  }
}

export const DriverOrdersChart: React.FC = () => {
  const [driverOrders, setDriverOrders] = useState<{ driverName: string; completedOrders: number }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DriverOrder[]>(`${import.meta.env.VITE_SERVER_API_URL}/waybill/all`)
        const waybills = response.data

        const ordersByDriver: { [key: string]: number } = {}
        waybills.forEach((waybill) => {
          const {
            Driver: { firstName, lastName },
          } = waybill
          const driverName = `${firstName} ${lastName}`
          ordersByDriver[driverName] = (ordersByDriver[driverName] || 0) + 1
        })

        const dataForChart = Object.entries(ordersByDriver).map(([driverName, completedOrders]) => ({
          driverName,
          completedOrders,
        }))

        setDriverOrders(dataForChart)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Количество выполненных заказов водителями</h2>
      <BarChart
        width={500}
        height={300}
        data={driverOrders}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="driverName" height={0} />
        <YAxis dataKey="completedOrders" />
        <Tooltip />
        <Bar dataKey="completedOrders" fill="#0088FE" name="Количество выполненных заказов" />
      </BarChart>
    </div>
  )
}
