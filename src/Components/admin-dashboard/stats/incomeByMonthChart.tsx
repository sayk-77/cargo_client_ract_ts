import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

interface Order {
  deliveryDate: string
  orderPrice: number
}

export const IncomeByMonthChart: React.FC = () => {
  const [incomeByMonth, setIncomeByMonth] = useState<{ month: string; income: number }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Order[]>(`${import.meta.env.VITE_SERVER_API_URL}/order/all`)
        const orders = response.data

        const incomeByMonthMap: { [key: string]: number } = {}
        orders.forEach((order) => {
          const month = new Date(order.deliveryDate).toLocaleString('default', { month: 'long' })
          incomeByMonthMap[month] = (incomeByMonthMap[month] || 0) + order.orderPrice
        })

        const incomeByMonthData = Object.entries(incomeByMonthMap).map(([month, income]) => ({
          month,
          income,
        }))

        setIncomeByMonth(incomeByMonthData)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingBottom: '20px' }}>Доход по месяцам</h2>
      <LineChart
        width={1000}
        height={400}
        data={incomeByMonth}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`${value} руб`, 'Доход']} />
        <Line
          type="monotone"
          strokeWidth={4}
          dataKey="income"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          name="Доход"
        />
      </LineChart>
    </div>
  )
}
