import React from 'react'
// @ts-ignore
import styles from './info.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

export const Info:React.FC = () => {
  return (
    <section className={styles.info}>
        <div className={styles.info_item}>
            <svg height={37} width={37}><use xlinkHref={sprite+'#email'}></use></svg>
            <p>support@quick.ru</p>
        </div>
        <div className={styles.info_item}>
            <svg height={37} width={37}><use xlinkHref={sprite+'#phone'}></use></svg>
            <p>+7 (123) 456 78 90</p>
        </div>
        <div className={styles.info_item}>
            <svg height={37} width={37}><use xlinkHref={sprite+'#icon-tg'}></use></svg>
            <p>Telegram</p>
        </div>
        <div className={styles.info_item}>
            <svg height={37} width={37}><use xlinkHref={sprite+'#icon-vk'}></use></svg>
            <p>Vk</p>
        </div>
    </section>
  )
}