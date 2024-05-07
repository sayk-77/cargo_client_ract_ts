import React, { useState } from 'react'
import styles from './authorization.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

export const Authorization: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const navigate = useNavigate()

  const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError('')

    const loginData = {
      email: email,
      password: password,
    }

    try {
      const response: AxiosResponse<{ token: string }> = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/client/login`,
        loginData,
      )

      const token: string = await response.data['token']
      localStorage.setItem('userToken', token)
      navigate('/profile')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError(err.response.data.error)
        } else {
          console.log('Ошибка на сервере:', err.message)
        }
      }
    }
  }

  return (
    <section className={styles.login_form}>
      <div className={styles.main}>
        <Link className={styles.logo} to="/">
          QuickGo
        </Link>
        <form onSubmit={login}>
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
        <div className={styles.help}>
          <Link to="/registration"> Регистрация</Link>
          <Link to="/recovery">Забыли пароль?</Link>
        </div>
      </div>
    </section>
  )
}
