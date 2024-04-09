import React, { useState } from 'react'
// @ts-ignore
import styles from './login.module.css'

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <h1 className={styles.title}>Вход в панель управления</h1>
        <form>
          <label className={styles.label} htmlFor="first">
            Почта:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Введите вашу почту"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className={styles.label} htmlFor="password">
            Пароль:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Введите ваш пароль"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.wrap}>
            <button className={styles.send} type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
