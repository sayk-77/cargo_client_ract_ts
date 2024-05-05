import React from 'react'
import sprite from '../../../sprite.svg'

interface DriverProps {
  driver: {
    ID: number
    firstName: string
    lastName: string
    licenseNumber: string
    transportationCert: string
  }
}

export const DriverCard: React.FC<DriverProps> = ({ driver }) => {
  return (
    <tr>
      <td>
        {driver.firstName} {driver.lastName}
      </td>
      <td>{driver.transportationCert}</td>
      <td>{driver.licenseNumber}</td>
      <td>
        <svg height={14} width={8} style={{ cursor: 'pointer' }}>
          <use xlinkHref={sprite + '#arrow_detail'}></use>
        </svg>
      </td>
    </tr>
  )
}
