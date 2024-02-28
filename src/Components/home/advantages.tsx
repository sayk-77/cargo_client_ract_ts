import React from 'react'
// @ts-ignore
import styles from './advantages.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'

export const Advantages:React.FC = () => {
  return (
    <section className={styles.advantages}>
        <img src="/assets/advantages-image.png" alt="advantages-image" />
        <div className={styles.advantages_text}>
            <h3>Почему стоит выбрать нас?</h3>
            <p>Болле 5 лет на передовой логистики. Доставили более 200 грузов, создавая надежные связи и обеспечивая эффективность в каждой доставке. Ваш выбор для успешных перевозок.</p>
            <ul className={styles.advantages_list}>
                <li><svg height={24} width={24}><use xlinkHref={sprite+'#checkmark'}></use></svg> Доставки точно в срок.</li>
                <li><svg height={24} width={24}><use xlinkHref={sprite+'#checkmark'}></use></svg> Безопасность вашего груза.</li>
                <li><svg height={24} width={24}><use xlinkHref={sprite+'#checkmark'}></use></svg> Круглосуточная поддержка.</li>
                <li><svg height={24} width={24}><use xlinkHref={sprite+'#checkmark'}></use></svg> Прозрачность услуг.</li>
            </ul>
        </div>
    </section>
  )
}