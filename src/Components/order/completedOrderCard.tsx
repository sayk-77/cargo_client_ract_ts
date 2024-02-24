import React from 'react'
// @ts-ignore
import styles from './completedOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

interface CompletedOrderCardProps {
    orderNumber: number
    orderDate: string
    typeName: string
    orderPrice: number
}

export const CompletedOrderCard: React.FC<CompletedOrderCardProps> = ({orderNumber, orderDate, typeName, orderPrice}) => {
    return (
    <>
        <div className={styles.order}>
        <p>{orderNumber}</p>
        <p>{orderDate}</p>
        <p>{typeName}</p>
        <p>{orderPrice}</p>
        <svg className={styles.additional_svg} height={22} width={27}>
            <use xlinkHref={sprite + '#detail_order'}></use>
        </svg>
        </div>
    </>
    )
}
