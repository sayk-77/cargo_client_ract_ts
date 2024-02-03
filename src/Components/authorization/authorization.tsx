import React from 'react'
//@ts-ignore
import styles from './authorization.module.css'
import { Link } from 'react-router-dom'

export const Authorization:React.FC = () => {
  return (
    <section className={styles.login_form}>
      <div className={styles.main}>
        <Link className={styles.logo} to="/">QuickGo</Link>
        <form action="">
          <label className={styles.label} htmlFor="first">Почта:</label>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            placeholder="Введите вашу почту"
            required
          />
          <label className={styles.label} htmlFor="password">Пароль:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Введите ваш пароль"
            required
          />
          <div className={styles.wrap}>
            <button className={styles.send} type="submit">Войти</button>
          </div>
        </form>

        <div className={styles.create_profile}>
            <p>Первый раз у нас?</p>
            <Link to="/registration" style={{ textDecoration: 'none' }}> Регистрация</Link>
        </div>
      </div>
    </section>
  )
}