import React from 'react'
// @ts-ignore
import styles from './driver.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { Dashboard } from '../dashboard/adminDashboard'
// @ts-ignore
import sprite from '../../../sprite.svg'

export const Driver:React.FC = () => {
  return (
    <div className={styles.driver_container}>
        <Dashboard />
        <div className={styles.driver_content}>
            <Search_pagination />
            <div className={styles.table_driver}>
            <table>
              <thead>
                  <tr>
                      <th>Имя | Фамилия</th>
                      <th>Стаж вождения</th>
                      <th>Номер водительского удостоверения</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
                      <td>
                        <svg height={14} width={8} style={{"cursor" : "pointer"}}>
                          <use xlinkHref={sprite + '#arrow_detail'}></use>
                        </svg>
                      </td>
                  </tr>
                  <tr>
                      <td>Иван Иванов</td>
                      <td>10 лет</td>
                      <td>12F2GEG14</td>
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