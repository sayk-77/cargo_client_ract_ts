import React, { useState } from 'react'
// @ts-ignore
import styles from './profileDashBoard.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { Link } from 'react-router-dom'
import { BurgerDashBoard } from './burgerDashBoard'


export const ProfileDashBoard:React.FC = () => {
    const [isOrdersOpen, setOrdersOpen] = useState(false);

    const toggleOrders = () => {
        setOrdersOpen(!isOrdersOpen);
    };

    const closeMenu = () => {
        setOrdersOpen(false);
    }

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
                    <span onClick={toggleOrders}>Заказы</span>
                    {isOrdersOpen && (
                    <div className={styles.subMenu}>
                        <Link to="/order/create" onClick={closeMenu}>Создать заказ</Link>
                        <Link to="/order/new" onClick={closeMenu}>Новые</Link>
                        <Link to="/order/process" onClick={closeMenu}>В процессе</Link>
                        <Link to="/order/completed" onClick={closeMenu}>Завершенные</Link>
                    </div>
                    )}
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