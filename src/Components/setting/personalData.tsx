import React from 'react'
// @ts-ignore
import styles from './personalData.module.css'

export const PersonalData:React.FC = () => {
  return (
    <section className={styles.personal_data}>
        <h2>Изменить личные данные</h2>
        <div className={styles.data_edit_container}>
            <div className={styles.data_edit}>
                <p>Имя</p>
                <input type="text" />
            </div>
            <div className={styles.data_edit}>
                <p>Фамилия</p>
                <input type="text" />
            </div>
            <div className={styles.data_edit}>
                <p>Адрес</p>
                <input type="text" />
            </div>
            <div className={styles.data_edit}>
                <p>Номер телефона</p>
                <input type="text" />
            </div>
            <div className={styles.data_edit}>
                <p>Электронная почта</p>
                <input type="text" />
            </div>
            <div className={styles.data_edit}>
                <button>Сохранить</button>
            </div>
        </div>
    </section>
  )
}