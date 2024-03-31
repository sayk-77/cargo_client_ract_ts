import React from 'react'
// @ts-expect-error
import styles from './about.module.css'
import { Header } from '../header/Header'
import { Link } from 'react-router-dom'


export const About:React.FC = () => {
  return (
    <>
        <Header />
        <section className={styles.about}>
            <h1>Добро пожаловать в мир <span>QuickGo</span> - вашего надежного партнера в грузоперевозках по России. Мы предоставляем не только услуги по доставке грузов, но и создаем надежные связи с нашими клиентами</h1>
            <h2>Чем мы лучше других</h2>
            <div className={styles.advantages}>
                <div className={styles.advantage}>
                    <h2>Опыт и Профессионализм</h2>
                    <p>QuickGo обладает более чем 10-летним опытом в сфере грузоперевозок, что гарантирует высший уровень профессионализма в каждом заказе</p>
                </div>

                <div className={styles.advantage}>
                    <h2>Широкий Автопарк</h2>
                    <p>Наш разнообразный автопарк включает в себя различные транспортные средства, обеспечивая эффективную доставку грузов любого объема и веса</p>
                </div>

                <div className={styles.advantage}>
                    <h2>Географическое Покрытие</h2>
                    <p>Мы осуществляем грузоперевозки по всей России, обеспечивая комплексные решения для доставки в различные регионы страны</p>
                </div>

                <div className={styles.advantage}>
                    <h2>Экспресс-Доставка</h2>
                    <p>QuickGo гарантирует быструю и своевременную доставку грузов, что делает нас идеальным выбором для срочных перевозок</p>
                </div>

                <div className={styles.advantage}>
                    <h2>Безопасность и Надежность</h2>
                    <p>Наши профессиональные водители и строгие стандарты обеспечивают высокий уровень безопасности и надежности во время транспортировки грузов</p>
                </div>

                <div className={styles.advantage}>
                    <h2>Индивидуальный Подход</h2>
                    <p>Мы ценим каждого клиента и предлагаем персонализированные решения, гарантируя удовлетворение потребностей даже самых требовательных заказчиков</p>
                </div>
            </div>
            <h3>Если у вас есть вопросы, свяжитесь с нами, или задайте свой вопрос через форму обратной связи</h3>
            <div className={styles.btn_container}>
                <Link to = "/ask-question" className={styles.btn_action}>Задать вопрос</Link>
                <Link to = "/contacts" className={styles.btn_action}>Связаться</Link>
            </div>
        </section>
    </>
  )
}