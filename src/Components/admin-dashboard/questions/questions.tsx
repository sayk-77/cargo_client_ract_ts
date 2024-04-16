import React, { useEffect, useState } from 'react'
import styles from './question.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { QuestionCard } from './questionCard'
import axios from 'axios'

interface Question {
  ID: number
  name: string
  email: string
  numberPhone: string
  question: string
  status: string
}

export const QuestionsUsers: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [filter, setFilter] = useState<string>('Новый')

  useEffect(() => {
    const getAllFeedback = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/feedback/all`,
        )
        if (response.status === 200) {
          setQuestions(response?.data)
        }
      } catch (ex) {
        console.log(ex)
      }
    }
    getAllFeedback()
  }, [])

  const filterItems = () => {
    switch (filter) {
      case 'Новый':
        return questions.filter((questions) => questions.status === 'Новый')
      case 'Обработан':
        return questions.filter((questions) => questions.status === 'Обработан')
      default:
        return questions
    }
  }

  return (
    <div>
      <div className={styles.question_content}>
        <Search_pagination />
        <div className={styles.table_question}>
          <div className={styles.filter}>
            <p
              className={filter === 'Новый' ? styles.activeFilter : ''}
              onClick={() => setFilter('Новый')}>
              Новые
            </p>
            <p
              className={filter === 'Обработан' ? styles.activeFilter : ''}
              onClick={() => setFilter('Обработан')}>
              Обработаны
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Номер вопроса</th>
                <th>Имя</th>
                <th>Номер телефона</th>
                <th>Вопрос</th>
              </tr>
            </thead>
            <tbody>
              {filterItems().map((question) => (
                <QuestionCard key={question.ID} quest={question} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
