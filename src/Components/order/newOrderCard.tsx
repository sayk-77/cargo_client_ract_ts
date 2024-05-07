import React, { useState } from 'react'
import styles from './newOrder.module.css'
import sprite from '../../sprite.svg'
import { OrderPopup } from '../orderPopup/orderPopup'

interface NewOrderCardProps {
  orderNumber: number
  orderDate: string
  typeName: string
  updateOrders: () => void
}

export const NewOrderCard: React.FC<NewOrderCardProps> = ({
  orderNumber,
  orderDate,
  typeName,
  updateOrders,
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
        <p>{typeName}</p>
        <svg className={styles.additional_svg} height={22} width={27} onClick={handlePopupOpen}>
          <use xlinkHref={sprite + '#arrow_detail'}></use>
        </svg>
      </div>

      {isPopupOpen && (
        <OrderPopup
          show={isPopupOpen}
          onClose={handlePopupClose}
          orderId={orderNumber}
          onDeleteSuccess={updateOrders}
        />
      )}
    </>
  )
}
