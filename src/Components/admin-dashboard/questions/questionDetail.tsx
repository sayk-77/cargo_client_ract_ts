import React, { useEffect, useState } from 'react'
import styles from './QuestionDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { checkRole } from '../../../tools/checkRole'

interface Question {
  ID: number
  name: string
  email: string
  numberPhone: string
  question: string
  status: string
}

export const QuestionDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [feedback, setFeedback] = useState<Question>()

  useEffect(() => {
    const role = checkRole()
    if (!role) {
      navigate('/')
    }
    const getFeedbackById = async (id: string) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/feedback/${id}`)
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

  const sendAnswer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)
      const solution = formData.get('answer') as string
      const customer = formData.get('name') as string

      const data = {
        question: feedback?.question || '',
        customer: customer,
        email: feedback?.email || '',
        nameEmploy: feedback?.name || '',
        solution: solution,
      }

      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/send-mail`, data)

      if (response.status === 200) {
        const responseUpdateStatus = await axios.put(
          `${import.meta.env.VITE_SERVER_API_URL}/feedback/update/${feedback?.ID}`,
        )
        if (responseUpdateStatus.status === 200) {
          navigate('/dashboard')
        }
      }
    } catch (ex) {
      console.error(ex)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.questionDetail}>
        {feedback && (
          <>
            <h1 className={styles.title}>Номер вопроса: {feedback.ID}</h1>
            <p className={styles.info}>
              <strong>Имя:</strong> {feedback.name}
            </p>
            <p className={styles.info}>
              <strong>Номер телефона: </strong>
              {feedback.numberPhone}
            </p>
            <p className={styles.info}>
              <strong>Адрес электронной почты: </strong>
              {feedback.email}
            </p>
            <p className={styles.questionTitle}>
              <strong>Вопрос:</strong>
            </p>
            <p className={styles.questionText}>{feedback.question}</p>
            <form className={styles.form} onSubmit={sendAnswer}>
              <label htmlFor="name">Ваше имя:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="answer">Ответ на вопрос:</label>
              <textarea id="answer" name="answer" required />
              <div className={styles.action}>
                <button className={styles.cancel} onClick={() => navigate('/dashboard')}>
                  Назад
                </button>
                <button type="submit">Отправить</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
