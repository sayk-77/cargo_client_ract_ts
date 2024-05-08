import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface MonthlyOrdersChartProps {
  data: { month: string; orders: number }[]
}

export const MonthlyOrdersChart: React.FC<MonthlyOrdersChartProps> = ({ data }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ textAlign: 'center', padding: '10px' }}>Статистика заказов по месяцам</h2>
    <LineChart width={1000} height={400} data={data}>
      <XAxis dataKey="month" tick={{ fontSize: '14px', fill: '#333' }} />
      <YAxis tick={{ fontSize: '14px', fill: '#333' }} name="Количество" />
      <Tooltip
        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
        labelStyle={{ fontSize: '14px', color: '#333' }}
        itemStyle={{ fontSize: '14px', color: '#333' }}
      />
      <Line type="monotone" dataKey="orders" name="Заказы" stroke="#0bd366" strokeWidth={4} />
    </LineChart>
  </div>
)
