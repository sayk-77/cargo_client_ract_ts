import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

interface PopularRoutesChartProps {
  data: { route: string; orders: number }[]
}

export const PopularRoutesChart: React.FC<PopularRoutesChartProps> = ({ data }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ textAlign: 'center', padding: '10px' }}>Популярные маршруты</h2>
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="route" tick={{ fontSize: '14px', fill: '#333' }} height={0} />
      <YAxis tick={{ fontSize: '14px', fill: '#333' }} name="Количество заказов" />
      <Tooltip
        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
        labelStyle={{ fontSize: '14px', color: '#333' }}
        itemStyle={{ fontSize: '14px', color: '#333' }}
      />
      <Bar dataKey="orders" fill="#d8db07" name="Заказы" />
    </BarChart>
  </div>
)
