import React from 'react'
// @ts-ignore
import styles from './statistic.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

export const Statistic:React.FC = () => {
  return (
    <section className={styles.statistic}>
        <div className={styles.statistic_item}>
            <svg height={38} width={38}><use xlinkHref={sprite+'#stat_user'}></use></svg>
            <div className={styles.statistic_item_text}>
                <h6>150+</h6>
                <p>Клиентов</p>
            </div>
        </div>
        <div className={styles.statistic_item}>
            <svg height={38} width={38}><use xlinkHref={sprite+'#stat_car'}></use></svg>
            <div className={styles.statistic_item_text}>
                <h6>30+</h6>
                <p>Машин</p>
            </div>
        </div>
        <div className={styles.statistic_item}>
            <svg height={38} width={38}><use xlinkHref={sprite+'#stat_order'}></use></svg>
            <div className={styles.statistic_item_text}>
                <h6>200+</h6>
                <p>Заказов</p>
            </div>
        </div>
    </section>
  )
}