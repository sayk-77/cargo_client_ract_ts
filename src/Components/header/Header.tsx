import React from 'react'
import styles from './header.module.css'
import sprite from '../../sprite.svg'
import { BurgerMenu } from './Burger'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const token = localStorage.getItem('userToken')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <svg height={30} width={130}>
              <use xlinkHref={sprite + '#logo'}></use>
            </svg>
          </Link>
        </div>
        <div className={styles.navigate}>
          <ul>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/ask-question">Задать вопрос</Link>
            </li>
          </ul>
        </div>
        <BurgerMenu />
        {token ? (
          <Link to="/profile" className={styles.profileIcon}>
            <svg height={30} width={30}>
              <use xlinkHref={sprite + '#profile'}></use>
            </svg>
          </Link>
        ) : (
          <div className={styles.auth}>
            <Link to="/authorization" className={styles.log}>
              Войти
            </Link>
            <Link to="/registration" className={styles.reg}>
              Регистрация
            </Link>
          </div>
        )}
      </header>
    </>
  )
}
