import React, { useState } from 'react'
import sprite from '../../../sprite.svg'
import { CustomerModal } from './customerModal'

interface CustomerCardProps {
  customer: {
    ID: number
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    email: string
  }
  updateClients: () => void
}

export const CustomerCard: React.FC<CustomerCardProps> = ({ customer, updateClients }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <tr>
      <td>{`${customer.firstName} ${customer.lastName}`}</td>
      <td>{customer.email}</td>
      <td>{customer.address}</td>
      <td>{customer.phoneNumber}</td>
      <td>
        <svg height={24} width={24} style={{ cursor: 'pointer' }} onClick={openModal}>
          <use xlinkHref={sprite + '#edit'}></use>
        </svg>
      </td>
      {showModal && <CustomerModal onClose={closeModal} customer={customer} updateClients={updateClients}/>}
    </tr>
  )
}
