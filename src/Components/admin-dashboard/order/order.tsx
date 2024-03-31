import React from 'react'
// @ts-ignore
import styles from './order.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { Dashboard } from '../dashboard/adminDashboard'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { useNavigate } from 'react-router-dom'

export const Order: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.order_container}>
        <Dashboard />
        <div className={styles.order_content}>
          <Search_pagination />
          <div className={styles.table_order}>
            <table>
              <thead>
                  <tr>
                      <th>ID заказа</th>
                      <th>Статус</th>
                      <th>Тип груза</th>
                      <th>Стоимость</th>
                      <th>Заказчик</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}} onClick={() => navigate('/create-order')}>
                          <use xlinkHref={sprite + '#arrow_detail'} ></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td style={{"color" : "#000", "fontSize": "15px", "fontWeight": "600"}}>1</td>
                      <td>Создан</td>
                      <td>Электроника</td>
                      <td>20 000 рублей</td>
                      <td>Крючков Дмитрий</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}