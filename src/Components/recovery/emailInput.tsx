import React, { useState } from 'react'
import styles from './recovery.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface EmailInputProps {
  nextStep: (newStep: 'email' | 'code' | 'change', email: string) => void
}

export const EmailInput: React.FC<EmailInputProps> = ({ nextStep }) => {
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      email: email,
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/password/email`, data)
      if (response.status === 200) {
        nextStep('code', email)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className={styles.recovery}>
      <div className={styles.main}>
        <h1 className={styles.title}>Востановление пароля</h1>
        <form onSubmit={sendForm}>
          <p className={styles.subtitle}>Введите почту от существующего аккаунта</p>
          <label className={styles.label} htmlFor="first">
            Почта:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Введите вашу почту"
            required
          />
          <div className={styles.wrap}>
            <button onClick={() => navigate('/')} className={styles.cancel}>
              Назад
            </button>

            <button className={styles.send} type="submit">
              Далее
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
