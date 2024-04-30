import React, { useState } from 'react'
import styles from './add_car.module.css'
import ReactInputMask from 'react-input-mask'

export const AddEmployes: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Почта:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.inputLabel}>Роль:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setRole(e.target.value)}
        />

        <label className={styles.inputLabel}>Пароль</label>
        <input
          type="password"
          className={styles.inputField}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
