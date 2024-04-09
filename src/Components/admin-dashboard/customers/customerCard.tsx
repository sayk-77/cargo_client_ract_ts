import React from 'react'
// @ts-ignore
import sprite from '../../../sprite.svg'

interface CustomerCardProps {
  customer: {
    ID: number
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    email: string
  }
}

export const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <tr>
      <td>{`${customer.firstName} ${customer.lastName}`}</td>
      <td>{customer.email}</td>
      <td>{customer.address}</td>
      <td>{customer.phoneNumber}</td>
      <td>
        <svg height={14} width={8} style={{ cursor: 'pointer' }}>
          <use xlinkHref={sprite + '#arrow_detail'}></use>
        </svg>
      </td>
    </tr>
  )
}
