import React from 'react'
import styles from './feedback.module.css'
import { useResize } from '../../hooks/useResize'

export const Feedback: React.FC = () => {
  useResize()

  return (
    <section className={styles.feedback}>
      <h2>Спросите нас</h2>
      <form className={styles.feedback_form}>
        <label>Ваше имя:</label>
        <input type="text" id="name" placeholder="Имя" />
        <label>Ваш номер телефона:</label>
        <input type="tel" id="phone" placeholder="+7-123-456-78-90" />
        <label>Ваша почта:</label>
        <input type="email" id="email" placeholder="email@email.ru" />
        <label>Ваш вопрос:</label>
        <textarea id="quest" placeholder="Вопрос" />
        <button className={styles.form_submit}>Отправить вопрос</button>
      </form>
    </section>
  )
}
