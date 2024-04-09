import React, { useState } from 'react'
// @ts-ignore
import styles from './adminDashboard.module.css'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { Link, useNavigate } from 'react-router-dom'

interface DashboardMenuProps {
  activeMenuItem: string
  onMenuItemClick: (menuItem: string) => void
}

export const DashboardMenu: React.FC<DashboardMenuProps> = ({
  activeMenuItem,
  onMenuItemClick,
}) => {
  const navigate = useNavigate()

  const handleClick = (menuItem: string) => {
    onMenuItemClick(menuItem)
  }

  const logout = (): void => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className={styles.dashboard}>
      <svg height={30} width={130} className={styles.logo}>
        <use xlinkHref={sprite + '#logo'}></use>
      </svg>
      <ul className={styles.dashboard_navigate}>
        <li>
          <svg height={25} width={25}>
            <use xlinkHref={`${sprite}#dashboard_order`}></use>
          </svg>
          <span
            className={activeMenuItem === 'order' ? styles.active : ''}
            onClick={() => handleClick('order')}>
            Заказы
          </span>
        </li>
        <li>
          <svg height={25} width={25}>
            <use xlinkHref={`${sprite}#dashboard_car_park`}></use>
          </svg>
          <span
            className={activeMenuItem === 'car-park' ? styles.active : ''}
            onClick={() => handleClick('car-park')}>
            Автомобили
          </span>
        </li>
        <li>
          <svg height={25} width={25}>
            <use xlinkHref={`${sprite}#dashboard_driver`}></use>
          </svg>
          <span
            className={activeMenuItem === 'order' ? styles.active : ''}
            onClick={() => handleClick('driver')}>
            Водители
          </span>
        </li>
        <li>
          <svg height={25} width={25}>
            <use xlinkHref={`${sprite}#dashboard_customers`}></use>
          </svg>
          <span
            className={activeMenuItem === 'order' ? styles.active : ''}
            onClick={() => handleClick('customers')}>
            Клиенты
          </span>
        </li>
        <li>
          <svg height={25} width={25}>
            <use xlinkHref={`${sprite}#questions`}></use>
          </svg>
          <span
            className={activeMenuItem === 'questions' ? styles.active : ''}
            onClick={() => handleClick('questions')}>
            Вопросы
          </span>
        </li>
        <li>
          <a style={{ cursor: 'pointer' }} onClick={logout}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#dashboard_logout'}></use>
            </svg>
            Выйти
          </a>
        </li>
      </ul>
    </div>
  )
}
