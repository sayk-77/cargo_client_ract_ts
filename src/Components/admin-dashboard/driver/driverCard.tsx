import React, { useState } from 'react'
import sprite from '../../../sprite.svg'
import { DriverModal } from './driverModal'

interface DriverCardProps {
  driver: {
    ID: number
    firstName: string
    lastName: string
    licenseNumber: string
    transportationCert: string
    status: string
  }
  updateDrivers: () => void
}

export const DriverCard: React.FC<DriverCardProps> = ({ driver, updateDrivers }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <tr>
      <td>
        {driver.firstName} {driver.lastName}
      </td>
      <td>{driver.transportationCert}</td>
      <td>{driver.licenseNumber}</td>
      <td>
        <svg height={24} width={24} style={{ cursor: 'pointer' }} onClick={openModal}>
          <use xlinkHref={sprite + '#edit'}></use>
        </svg>
        {showModal && <DriverModal isOpen={showModal} onClose={closeModal} driver={driver} updateDrivers={updateDrivers}/>}
      </td>
    </tr>
  )
}
