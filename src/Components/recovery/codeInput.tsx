import React, { useState } from 'react'
import styles from './recovery.module.css'
import axios from 'axios'

interface CodeInputProps {
  nextStep: (newStep: 'email' | 'code' | 'change', email: string) => void
  email: string
}

export const CodeInput: React.FC<CodeInputProps> = ({ nextStep, email }) => {
  const [code, setCode] = useState<number>(0)

  const confirmEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      email: email,
      code: code,
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/password/confirm`,
        data,
      )
      if (response.status === 200) {
        nextStep('change', email)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className={styles.recovery}>
      <div className={styles.main}>
        <h1 className={styles.title}>Подтверждение почты</h1>
        <form onSubmit={confirmEmail}>
          <p className={styles.subtitle}>
            Введите код подтверждения, который был выслан на вашу почту. Если
            письмо не приходит, проверьте папку спам
          </p>
          <label className={styles.label} htmlFor="first">
            Код
          </label>
          <input
            className={styles.input}
            type="text"
            id="code"
            name="code"
            placeholder="Введите код"
            onChange={(e) => setCode(Number(e.target.value))}
            required
          />
          <div className={styles.wrap}>
            <button className={styles.send} type="submit">
              Далее
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
