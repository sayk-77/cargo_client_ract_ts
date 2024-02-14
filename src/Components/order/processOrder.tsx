import React from 'react'
// @ts-ignore
import styles from './processOrder.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { ProfileDashBoard } from '../profile/profileDashBoard'

export const ProcessOrder:React.FC = () => {
  return (
    <section className={styles.processOrder}>
        <ProfileDashBoard />
        <div className={styles.orders_filter}>
            <div className={styles.orders}>
                <div className={styles.order_title}>
                    <p>Номер</p>
                    <p>Дата отправления</p>
                    <p>Дата доставки</p>
                </div>
                <div className={styles.order}>
                    <p>1</p>
                    <p>08-01-2024</p>
                    <p>15-01-2024</p>
                    <svg className={styles.additional_svg} height={22} width={27}><use xlinkHref={sprite+'#detail_order'}></use></svg>
                </div>
            </div>
        </div>
    </section>
  )
}