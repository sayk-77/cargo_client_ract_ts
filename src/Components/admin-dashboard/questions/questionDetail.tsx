import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './QuestionDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

interface Question {
  ID: number
  name: string
  email: string
  numberPhone: string
  question: string
}

export const QuestionDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [feedback, setFeedback] = useState<Question>()

  useEffect(() => {
    const getFeedbackById = async (id: string) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/feedback/${id}`,
        )
        if (response.status === 200) {
          setFeedback(response?.data)
        }
      } catch (ex) {
        console.log(ex)
      }
    }
    if (id !== undefined) {
      getFeedbackById(id)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.questionDetail}>
        <h1 className={styles.title}>Номер вопроса: {feedback?.ID}</h1>
        <p className={styles.info}>
          <strong>Имя:</strong> {feedback?.name}
        </p>
        <p className={styles.info}>
          <strong>Номер телефона: </strong>
          {feedback?.numberPhone}
        </p>
        <p className={styles.info}>
          <strong>Адрес электронной почты: </strong>
          {feedback?.email}
        </p>
        <p className={styles.questionTitle}>
          <strong>Вопрос:</strong>
        </p>
        <p className={styles.questionText}>{feedback?.question}</p>
        <form className={styles.form}>
          <label htmlFor="name">Ваше имя:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="answer">Ответ на вопрос:</label>
          <textarea id="answer" name="answer" required />
          <div className={styles.action}>
            <button
              className={styles.cancel}
              onClick={() => navigate('/dashboard')}>
              Назад
            </button>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  )
}
