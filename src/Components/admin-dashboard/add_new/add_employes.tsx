import React, { useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
import Select from 'react-select'
import { toast } from 'react-toastify'

export const AddEmployes: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [role, setRole] = useState<{ value: string; label: string } | null>(null)
  const [password, setPassword] = useState<string>('')

  const resetForm = () => {
    setEmail('')
    setRole(null)
    setPassword('')
  }

  const roleOptions = [
    { value: 'Admin', label: 'Админ' },
    { value: 'Manager', label: 'Менеджер' },
  ]

  const addEmploye = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password,
      role: role?.value,
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

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? '#fff' : '#000',
      backgroundColor: state.isSelected ? '#0bd366' : '#fff',
    }),
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: '#f6f6f6',
      minWidth: '440px',
      maxWidth: '440px',
      height: '41px',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#000' }),
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
        <Select
          value={role}
          styles={customStyles}
          onChange={(selectedOption) => setRole(selectedOption)}
          options={roleOptions}
          placeholder="Выберите роль"
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
