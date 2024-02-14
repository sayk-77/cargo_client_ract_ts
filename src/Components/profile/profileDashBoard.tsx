import React from 'react'
// @ts-ignore
import styles from './profileDashBoard.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { Link } from 'react-router-dom'
import { BurgerDashBoard } from './burgerDashBoard'


export const ProfileDashBoard:React.FC = () => {
  return (
    <>
        <section className={styles.dashBoard}>
            <svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg>
            <div className={styles.panel_menu}>
                <div className={styles.panel_link}>
                    <svg height={25} width={25}><use xlinkHref={sprite+'#profile'}></use></svg>
                    <Link to="/profile">Профиль</Link>
                </div>
                <div className={styles.panel_link}>
                    <svg height={26} width={26}><use xlinkHref={sprite+'#home'}></use></svg>
                    <Link to="/">Главная</Link>
                </div>
                <div className={styles.panel_link}>
                    <svg height={25} width={25}><use xlinkHref={sprite+'#order'}></use></svg>
                    <Link to="/order">Заказы</Link>
                </div>
                <div className={styles.panel_link}>
                    <svg height={25} width={25}><use xlinkHref={sprite+'#setting'}></use></svg>
                    <Link to="/setting">Настройки</Link>
                </div>
            </div>
            <div className={styles.briefly_user}>
                <img src="/src/assets/user_avatar.png" alt="avatar" />
                <div className={styles.user_info}>
                    <p>Name</p>
                    <p>email@email.ru</p>
                </div>
                <svg height={26} width={26}><use xlinkHref={sprite+'#logout'}></use></svg>
            </div>
        </section>
        <BurgerDashBoard />
    </>
  )
}