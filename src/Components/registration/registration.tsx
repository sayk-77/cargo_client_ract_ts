import React from 'react'
//@ts-ignore
import styles from './registration.module.css'
import { Link } from 'react-router-dom'

export const Registration:React.FC = () => {
  return (
    <section className={styles.login_form}>
      <div className={styles.main}>
        <Link className={styles.logo} to="/">QuickGo</Link>
        <form action="">
          <label className={styles.label} htmlFor="firstname">Имя:</label>
          <input
            className={styles.input}
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Введите ваше имя"
            required
          />
          <label className={styles.label} htmlFor="lastname">Фамилия:</label>
          <input
            className={styles.input}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Введите вашу фамилию"
            required
          />
          <label className={styles.label} htmlFor="address">Адрес:</label>
          <input
            className={styles.input}
            type="text"
            id="address"
            name="address"
            placeholder="Введите ваш адрес"
            required
          />
          <label className={styles.label} htmlFor="email">Почта:</label>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            placeholder="Введите вашу почту"
            required
          />
          <label className={styles.label} htmlFor="phone">Номер телефона:</label>
          <input
            className={styles.input}
            type="text"
            id="phone"
            name="phone"
            placeholder="Введите ваш номер телефона"
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
            <button className={styles.send} type="submit">Регистрация</button>
          </div>
        </form>

        <div className={styles.create_profile}>
            <p>Уже были у нас?</p>
            <Link to="/authorization" style={{ textDecoration: 'none' }}> Вход</Link>
        </div>
      </div>
    </section>
  )
}