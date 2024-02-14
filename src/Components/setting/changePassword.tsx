import React from 'react'
// @ts-ignore
import styles from './changePassword.module.css'

export const ChangePassword:React.FC = () => {
  return (
    <section className={styles.changePassword}>
        <h3>Изменить пароль</h3>
        <div className={styles.password_edit_container}>
            <div className={styles.password_edit}>
                <p>Новый пароль</p>
                <input type="password" />
            </div>
            <div className={styles.password_edit}>
                <p>Текущий пароль</p>
                <input type="password" />
            </div>
        </div>
        <button>Сохранить</button>
    </section>
  )
}