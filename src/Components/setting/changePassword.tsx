import React, { useRef, useState } from 'react'
import styles from './changePassword.module.css'
import axios from 'axios'
import sprite from '../../sprite.svg'

export const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const isValidPassword = (password: string) =>
    /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(password)

  const newPasswordRef = useRef<HTMLInputElement>(null)
  const currentPasswordRef = useRef<HTMLInputElement>(null)

  const changePassword = async () => {
    try {
      const token = localStorage.getItem('userToken')

      if (!isValidPassword(newPassword)) {
        setError(
          'Пароль должен содержать минимум одну цифру и состоять только из букв латинского алфавита.',
        )
        return
      }

      if (currentPassword === newPassword) {
        setError('Новый пароль должен отличаться от текущего пароля')
        return
      }

      const dataPassword = {
        currentPassword: currentPassword,
        newPassword: newPassword,
      }

      await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/client/change-password`,
        dataPassword,
        {
          headers: { Authorization: token },
        },
      )

      currentPasswordRef.current && (currentPasswordRef.current.value = '')
      newPasswordRef.current && (newPasswordRef.current.value = '')

      setError('')
      setMessage('Пароль успешно изменен')
    } catch (err: any) {
      setError(err.response?.data)
      setMessage('')
    }
  }

  return (
    <section className={styles.changePassword}>
      <h3>Изменить пароль</h3>
      <div className={styles.password_edit_container}>
        <div className={styles.password_edit}>
          <p>Новый пароль</p>
          <div className={styles.password_cont}>
            <input
              type={showPassword ? 'text' : 'password'}
              ref={newPasswordRef}
              placeholder="Новый пароль"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassword(e.target.value)
              }
            />
          </div>
        </div>
        <div
          className={styles.showPassword}
          onClick={() => setShowPassword(!showPassword)}>
          <svg height={20} width={30}>
            <use
              xlinkHref={
                showPassword ? sprite + '#eye_close' : sprite + '#eye_open'
              }></use>
          </svg>
        </div>
        <div className={styles.password_edit}>
          <p>Текущий пароль</p>
          <div className={styles.password_cont}>
            <input
              type={showPassword ? 'text' : 'password'}
              ref={currentPasswordRef}
              placeholder="Текущий пароль"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentPassword(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {message && <p className={styles.success}>{message}</p>}
      <button onClick={changePassword}>Сохранить</button>
    </section>
  )
}
