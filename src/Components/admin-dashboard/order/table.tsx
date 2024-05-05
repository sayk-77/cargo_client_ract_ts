import React from 'react'
import { HeaderTable } from './headerTable'
import { BodyTable } from './bodyTable'

interface Order {
  ID: number
  status: string
  cargoType: string
  recipient: string
  orderDate: string
  destinationAddress: string
  sendingAddress: string
  deliveryDate: string
  orderPrice: number
  customer: string
  Client: {
    firstName: string
    lastName: string
  }
  CargoType: {
    typeName: string
  }
}

interface TableProps {
  status: string
  orders: Order[]
}

export const TableOrder: React.FC<TableProps> = ({ status, orders }) => {
  const filteredOrders = orders.filter((order) => order.status === status)

  return (
    <table style={{ maxWidth: '90px' }}>
      <HeaderTable status={status} />
      <BodyTable orders={filteredOrders} />
    </table>
  )
}
