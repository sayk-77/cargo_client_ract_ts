import React from 'react'
// @ts-ignore
import styles from './newOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

interface NewOrderCardProps {
    orderNumber: number
    orderDate: string
    typeName: string
}

export const NewOrderCard: React.FC<NewOrderCardProps> = ({orderNumber, orderDate, typeName}) => {
  return (
    <>
      <div className={styles.order}>
        <p>{orderNumber}</p>
        <p>{orderDate}</p>
        <p>{typeName}</p>
        <svg className={styles.additional_svg} height={22} width={27}>
          <use xlinkHref={sprite + '#detail_order'}></use>
        </svg>
      </div>
    </>
  )
}
