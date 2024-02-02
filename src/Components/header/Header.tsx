import React from 'react'
// @ts-ignore
import styles from './header.module.css'
// @ts-ignore
import sprite from '../../sprite.svg'
import { BurgerMenu } from './Burger'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/"><svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg></Link>
                </div>
                <div className={styles.navigate}>
                    <ul>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/ask-question">Задать вопрос</Link></li>
                    </ul>
                </div>
                <BurgerMenu />
                <div className={styles.auth}>
                    <Link to="/authorization" className={styles.log}>Войти</Link>
                    <Link to="/registration" className={styles.reg}>Регистрация</Link>
                </div>
            </header>
        </>
    )
}