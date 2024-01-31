import React from 'react'
// @ts-ignore
import styles from './banner.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

export const Banner:React.FC = () => {
  return (
    <>
        <section className={styles.banner}>
            <div className={styles.banner_text}>
                <h1 className={styles.title}>Просто. Быстро. Грузы по России с 
                    <span className={styles.title_company_name}> QuickGo</span>
                </h1>
                <p>Перевозим грузы без лишних хлопот: ваш надежный партнер в грузоперевозках по России. Сделайте доставку легкой и эффективной</p>
                <button className={styles.order}>Оформить доставку</button>
            </div>
            <img src="/src/assets/banner-image.png" />
        </section>
    </>
  )
}
