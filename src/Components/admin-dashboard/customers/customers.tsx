import React from 'react'
// @ts-ignore
import styles from './customers.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
// @ts-ignore
import sprite from '../../../sprite.svg'

export const Customers:React.FC = () => {
  return (
    <div className={styles.customers_container}>
        <div className={styles.customers_content}>
            <Search_pagination />
            <div className={styles.table_customers}>
            <table>
              <thead>
                  <tr>
                      <th>Имя | Фамилия</th>
                      <th>Почта</th>
                      <th>Адрес</th>
                      <th>Телефон</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Смирнов сергей</td>
                      <td>email@email.com</td>
                      <td>Москва, ул.Свободы, д.43</td>
                      <td>+7(123)-123-12-12</td>
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