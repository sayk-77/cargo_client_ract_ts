import React, { useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AddEmployes: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const resetForm = () => {
    setEmail('')
    setRole('')
    setPassword('')
  }

  const addEmploye = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password,
      role: role,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/employee/create`, data)
      if (response.status === 200 && response.data?.message === 'Успешно добавлен') {
        toast.success(response.data?.message)
        resetForm()
      } else {
        toast.error(response.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={addEmploye}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Почта:</label>
        <input
          type="email"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Роль:</label>
        <input
          type="text"
          className={styles.inputField}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Пароль</label>
        <input
          type="password"
          className={styles.inputField}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
