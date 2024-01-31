import React from 'react'
// @ts-ignore
import styles from './header.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { BurgerMenu } from './Burger'

export const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <a href=""><svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg></a>
                </div>
                <div className={styles.navigate}>
                    <ul>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Задать вопрос</a></li>
                    </ul>
                </div>
                <BurgerMenu />
                <div className={styles.auth}>
                    <button className={styles.log}>Войти</button>
                    <button className={styles.reg}>Регистрация</button>
                </div>
            </header>
        </>
    )
}