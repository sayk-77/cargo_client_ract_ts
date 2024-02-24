import React from 'react'
// @ts-ignore
import styles from './processOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

interface ProcessOrderCardProps {
    orderNumber: number
    orderDate: string
    deliveryDate: string
}

export const ProcessOrderCard: React.FC<ProcessOrderCardProps> = ({orderNumber, orderDate, deliveryDate}) => {
  return (
    <>
      <div className={styles.order}>
        <p>{orderNumber}</p>
        <p>{orderDate}</p>
        <p>{deliveryDate}</p>
        <svg className={styles.additional_svg} height={22} width={27}>
          <use xlinkHref={sprite + '#detail_order'}></use>
        </svg>
      </div>
    </>
  )
}
