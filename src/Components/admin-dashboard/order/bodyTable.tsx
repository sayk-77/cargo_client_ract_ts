import React from 'react'
import styles from './body.module.css'
import { ElementTable } from './elementTable'

interface Order {
  ID: number
  status: string
  recipient: string
  cargoType: string
  orderDate: string
  destinationAddress: string
  sendingAddress: string
  deliveryDate: string
  orderPrice: number
  customer: string
  CargoType: {
    typeName: string
  }
  Client: {
    firstName: string
    lastName: string
  }
}

interface BodyTableProps {
  orders: Order[]
}

export const BodyTable: React.FC<BodyTableProps> = ({ orders }) => {
  return (
    <tbody className={styles.element}>
      {orders.map((order: Order) => (
        <ElementTable key={order.ID} order={order} status={order.status} />
      ))}
    </tbody>
  )
}
