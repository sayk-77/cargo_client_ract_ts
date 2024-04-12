import React, { useState } from 'react'
import styles from './processOrder.module.css'
import sprite from '../../sprite.svg'
import { OrderPopup } from '../orderPopup/orderPopup'

interface ProcessOrderCardProps {
  orderNumber: number
  orderDate: string
  deliveryDate: string
}

export const ProcessOrderCard: React.FC<ProcessOrderCardProps> = ({
  orderNumber,
  orderDate,
  deliveryDate,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const handlePopupOpen = () => {
    setPopupOpen(true)
  }

  const handlePopupClose = () => {
    setPopupOpen(false)
  }

  return (
    <>
      <div className={styles.order}>
        <p>{orderNumber}</p>
        <p>{orderDate}</p>
        <p>{deliveryDate}</p>
        <svg
          className={styles.additional_svg}
          height={22}
          width={27}
          onClick={handlePopupOpen}>
          <use xlinkHref={sprite + '#detail_order'}></use>
        </svg>
      </div>

      {isPopupOpen && (
        <OrderPopup
          show={isPopupOpen}
          onClose={handlePopupClose}
          orderId={orderNumber}
        />
      )}
    </>
  )
}
