import React from 'react'
// @ts-ignore
import styles from './header.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { Example } from './Burger'

export const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg>
                </div>
                <div className={styles.navigate}>
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Задать вопрос</li>
                    </ul>
                </div>
                <Example />
                <div className={styles.auth}>
                    <button className={styles.log}>Войти</button>
                    <button className={styles.reg}>Регистрация</button>
                </div>
            </header>
        </>
    )
}