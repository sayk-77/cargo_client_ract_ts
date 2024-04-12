import React from 'react'
import styles from './info.module.css'
import sprite from '../../sprite.svg'

export const Info: React.FC = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info_item_container}>
        <a href="mailto:support@quick.ru" className={styles.info_item}>
          <svg height={37} width={37}>
            <use xlinkHref={sprite + '#email'}></use>
          </svg>
          <p>support@quick.ru</p>
        </a>
      </div>
      <div className={styles.info_item_container}>
        <a href="tel:+71234567890" className={styles.info_item}>
          <svg height={37} width={37}>
            <use xlinkHref={sprite + '#phone'}></use>
          </svg>
          <p>+7 (123) 456 78 90</p>
        </a>
      </div>
      <div className={styles.info_item_container}>
        <a href="https://t.me" className={styles.info_item}>
          <svg height={37} width={37}>
            <use xlinkHref={sprite + '#icon-tg'}></use>
          </svg>
          <p>Telegram</p>
        </a>
      </div>
      <div className={styles.info_item_container}>
        <a href="https://vk.com" className={styles.info_item}>
          <svg height={37} width={37}>
            <use xlinkHref={sprite + '#icon-vk'}></use>
          </svg>
          <p>Vk</p>
        </a>
      </div>
    </section>
  )
}
