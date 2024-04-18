import React from 'react'
import sprite from '../../../sprite.svg'
import { useNavigate } from 'react-router-dom'

interface QuestionCardProops {
  quest: {
    ID: number
    name: string
    email: string
    numberPhone: string
    status: string
    question: string
  }
}

export const QuestionCard: React.FC<QuestionCardProops> = ({ quest }) => {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{quest.ID}</td>
      <td>{quest.name}</td>
      <td>{quest.numberPhone}</td>
      <td
        style={{
          maxWidth: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
        {quest.question}
      </td>
      {quest.status !== 'Обработан' && (
        <td>
          <svg
            height={14}
            width={8}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/solution-quest/${quest.ID}`)}>
            <use xlinkHref={sprite + '#arrow_detail'}></use>
          </svg>
        </td>
      )}
    </tr>
  )
}
