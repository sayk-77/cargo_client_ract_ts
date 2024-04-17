import React, { FormEvent, useState } from 'react'
import styles from './recovery.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface ChangePasswordProps {
  email: string
}

export const ChangePassword: React.FC<ChangePasswordProps> = ({ email }) => {
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const isValidPassword = (password: string) =>
    /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(password)

  const sendPassword = async (e: FormEvent) => {
    e.preventDefault()

    if (!isValidPassword(password)) {
      setError(
        'Пароль должен содержать минимум одну цифру и состоять только из букв латинского алфавита.',
      )
      return
    }

    const data = {
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/password/change`,
        data,
      )
      if (response.status === 200) {
        navigate('/authorization')
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className={styles.recovery}>
      <div className={styles.main}>
        <h1 className={styles.title}>Новый пароль</h1>
        <form onSubmit={sendPassword}>
          <p className={styles.subtitle}>Придумайте новый, надежный пароль</p>
          <label className={styles.label} htmlFor="first">
            Код
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.wrap}>
            <button className={styles.send} type="submit">
              Далее
            </button>
          </div>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  )
}
