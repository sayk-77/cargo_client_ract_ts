import React, { useEffect, useState } from 'react'
import styles from './question.module.css'
import { QuestionCard } from './questionCard'
import axios from 'axios'
import { Pagination } from '../../pagination/pagination'

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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  useEffect(() => {
    const getAllFeedback = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/feedback/all`)
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
        return questions.filter((question) => question.status === 'Новый')
      case 'Обработан':
        return questions.filter((question) => question.status === 'Обработан')
      default:
        return questions
    }
  }

  const filteredQuestions = filterItems()
  const totalItems = filteredQuestions.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentQuestions = questions.slice(startIndex, endIndex)

  const changePage = (selected: number) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className={styles.question_content}>
      <div className={styles.table_question}>
        {totalPages >= 2 && (
          <Pagination pageCount={totalPages} currentPage={currentPage} pageChange={changePage} />
        )}
        <div className={styles.filter}>
          <p className={filter === 'Новый' ? styles.activeFilter : ''} onClick={() => setFilter('Новый')}>
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
            {currentQuestions.map((question) => (
              <QuestionCard key={question.ID} quest={question} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
