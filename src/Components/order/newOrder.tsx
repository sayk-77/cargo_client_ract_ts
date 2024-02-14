import React from 'react'
// @ts-ignore
import styles from './newOrder.module.css'
import { ProfileDashBoard } from '../profile/profileDashBoard'
// @ts-ignore
import sprite from '../../sprite.svg'

export const NewOrder:React.FC = () => {
  return (
    <section className={styles.newOrder}>
        <ProfileDashBoard />
        <div className={styles.orders_filter}>
            <div className={styles.orders}>
                <div className={styles.order_title}>
                    <p>Номер</p>
                    <p>Дата создания</p>
                    <p>Груз</p>
                </div>
                <div className={styles.order}>
                    <p>1</p>
                    <p>08-01-2024</p>
                    <p>Электроника</p>
                    <svg className={styles.additional_svg} height={22} width={27}><use xlinkHref={sprite+'#detail_order'}></use></svg>
                </div>
            </div>
        </div>
    </section>
  )
}