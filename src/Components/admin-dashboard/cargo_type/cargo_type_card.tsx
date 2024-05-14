import React, { useState } from 'react'
import styles from './cargo_type.module.css'
import sprite from '../../../sprite.svg'
import { CargoTypeModal } from './cargo_type_modal'

interface CargoTypeCardProps {
  cargoType: {
    ID: number
    typeName: string
    descriptionType: string
    priceCoeff: number
  }
  updateCargoTypes(): void
}

export const CargoTypeCard: React.FC<CargoTypeCardProps> = ({ cargoType, updateCargoTypes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <tr className={styles.cargo_type_card}>
      <td>{cargoType.typeName}</td>
      <td>{cargoType.descriptionType}</td>
      <td>x {cargoType.priceCoeff}</td>
      <td>
        <svg height={24} width={24} style={{ cursor: 'pointer' }} onClick={openModal}>
          <use xlinkHref={sprite + '#edit'}></use>
        </svg>
      </td>
      {isOpen && (
        <CargoTypeModal cargoType={cargoType} onClose={closeModal} updateCargoTypes={updateCargoTypes} />
      )}
    </tr>
  )
}
