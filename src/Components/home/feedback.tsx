import React, { useState } from 'react'
import styles from './feedback.module.css'
import { useResize } from '../../hooks/useResize'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Feedback: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [question, setQuestion] = useState<string>('')

  useResize()

  const sendFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      name: name,
      numberPhone: phone,
      email: email,
      question: question,
    }

    const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/feedback/new`, data)
    if (response.status === 200) {
      toast.success('Спасибо за вопрос, мы ответим на него в ближайшее время!')
      resetForm()
    }
  }

  const resetForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    setQuestion('')
  }

  return (
    <section className={styles.feedback}>
      <h2>Спросите нас</h2>
      <form className={styles.feedback_form} onSubmit={sendFeedback}>
        <label>Ваше имя:</label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Ваш номер телефона:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          placeholder="+7-123-456-78-90"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Ваша почта:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="email@email.ru"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Ваш вопрос:</label>
        <textarea
          id="quest"
          value={question}
          placeholder="Вопрос"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className={styles.form_submit} type="submit">
          Отправить вопрос
        </button>
      </form>
    </section>
  )
}
