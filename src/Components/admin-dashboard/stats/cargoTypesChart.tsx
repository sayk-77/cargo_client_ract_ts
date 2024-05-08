import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

interface CargoTypesChartProps {
  data: { name: string; value: number }[]
}

const COLORS = ['#0088FE', '#0bd366', '#FFBB28', '#FF8042', '#AF19FF']

export const CargoTypesChart: React.FC<CargoTypesChartProps> = ({ data }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ textAlign: 'center', padding: '10px' }}>Распределение типов грузов в заказах</h2>
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx={250}
        cy={150}
        labelLine={false}
        label={(entry) => `${entry.name}: ${entry.value}`}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
)
