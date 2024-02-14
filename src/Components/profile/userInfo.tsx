import React from 'react'
// @ts-ignore
import styles from './userInfo.module.css'

export const UserInfo:React.FC = () => {
  return (
    <section className={styles.userInfo}>
        <h3>Личная информация</h3>
        <img src="/src/assets/user_avatar_100px.png" alt="" />
        <div className={styles.info_blocks}>
            <div className={styles.info_block}>
                <p>Имя</p>
                <p>name</p>
            </div>
            <div className={styles.info_block}>
                <p>Фамилия</p>
                <p>surname</p>
            </div>
            <div className={styles.info_block}>
                <p>Адрес</p>
                <p>address</p>
            </div>
            <div className={styles.info_block}>
                <p>Номер телефона</p>
                <p>+7 (151) 125 12 42</p>
            </div>
            <div className={styles.info_block}>
                <p>Электронная почта</p>
                <p>email@email.ru</p>
            </div>
        </div>
    </section>
  )
}