import React, { useEffect, useState } from 'react'
// @ts-ignore
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
}

export const QuestionsUsers: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])

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

  return (
    <div>
      <div className={styles.question_content}>
        <Search_pagination />
        <div className={styles.table_question}>
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
              {questions.map((question) => (
                <QuestionCard key={question.ID} quest={question} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
