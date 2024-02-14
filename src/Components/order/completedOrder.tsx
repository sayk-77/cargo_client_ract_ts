import React from 'react'
// @ts-ignore
import styles from './completedOrder.module.css'
import { ProfileDashBoard } from '../profile/profileDashBoard'
// @ts-ignore
import sprite from '../../sprite.svg'

export const CompletedOrder:React.FC = () => {
  return (
        <section className={styles.completed_order}>
        <ProfileDashBoard />
        <div className={styles.orders_filter}>
            <div className={styles.orders}>
                <div className={styles.order_title}>
                    <p>Номер</p>
                    <p>Дата доставки</p>
                    <p>Груз</p>
                    <p>Стоимость</p>
                </div>
                <div className={styles.order}>
                    <p>1</p>
                    <p>08-01-2024</p>
                    <p>Электроника</p>
                    <p>19 000 Р</p>
                    <svg className={styles.additional_svg} height={22} width={27}><use xlinkHref={sprite+'#detail_order'}></use></svg>
                </div>
            </div>
        </div>
    </section>
  )
}