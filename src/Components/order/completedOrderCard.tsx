import React, { useState } from 'react'
// @ts-ignore
import styles from './completedOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { OrderPopup } from '../orderPopup/orderPopup'

interface CompletedOrderCardProps {
    orderNumber: number
    orderDate: string
    typeName: string
    orderPrice: number
}

export const CompletedOrderCard: React.FC<CompletedOrderCardProps> = ({orderNumber, orderDate, typeName, orderPrice}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
        setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };
    
    return (
    <>
        <div className={styles.order}>
        <p>{orderNumber}</p>
        <p>{orderDate}</p>
        <p>{typeName}</p>
        <p>{orderPrice}</p>
        <svg className={styles.additional_svg} height={22} width={27} onClick={handlePopupOpen}>
            <use xlinkHref={sprite + '#detail_order'}></use>
        </svg>
        </div>

        {isPopupOpen && (
            <OrderPopup show={isPopupOpen} onClose={handlePopupClose} orderId={orderNumber} />
        )}
    </>
    )
}
