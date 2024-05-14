import React, { useEffect, useState } from 'react'
import styles from './adminDashboard.module.css'
import sprite from '../../../sprite.svg'
import { useNavigate } from 'react-router-dom'
import { checkRole } from '../../../tools/checkRole'

interface DashboardMenuProps {
  activeMenuItem: string
  onMenuItemClick: (menuItem: string) => void
}

export const DashboardMenu: React.FC<DashboardMenuProps> = ({ activeMenuItem, onMenuItemClick }) => {
  const navigate = useNavigate()
  const [role, setRole] = useState<string>()

  const handleClick = (menuItem: string) => {
    onMenuItemClick(menuItem)
  }

  const logout = (): void => {
    localStorage.removeItem('adminToken')
    navigate('/')
  }

  useEffect(() => {
    const role = checkRole()
    if (role === undefined) {
      navigate('/dashboard/login')
    }
    setRole(role)
  }, [])

  return (
    <div className={styles.dashboard}>
      <svg height={30} width={130} className={styles.logo}>
        <use xlinkHref={sprite + '#logo'}></use>
      </svg>
      {role === 'Admin' && (
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
            <svg height={25} width={25}>
              <use xlinkHref={`${sprite}#cargo`}></use>
            </svg>
            <span
              className={activeMenuItem === 'cargo-type' ? styles.active : ''}
              onClick={() => handleClick('cargo-type')}>
              Типы грузов
            </span>
          </li>
          <li>
            <svg height={25} width={25}>
              <use xlinkHref={`${sprite}#addNew`}></use>
            </svg>
            <span
              className={activeMenuItem === 'addNew' ? styles.active : ''}
              onClick={() => handleClick('addNew')}>
              Добавить
            </span>
          </li>
          <li>
            <svg height={25} width={25}>
              <use xlinkHref={`${sprite}#stats`}></use>
            </svg>
            <span
              className={activeMenuItem === 'stats' ? styles.active : ''}
              onClick={() => handleClick('stats')}>
              Статистика
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
      )}
      {role === 'Manager' && (
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
              <use xlinkHref={`${sprite}#questions`}></use>
            </svg>
            <span
              className={activeMenuItem === 'questions' ? styles.active : ''}
              onClick={() => handleClick('questions')}>
              Вопросы
            </span>
          </li>
          <li>
            <svg height={25} width={25}>
              <use xlinkHref={`${sprite}#stats`}></use>
            </svg>
            <span
              className={activeMenuItem === 'stats' ? styles.active : ''}
              onClick={() => handleClick('stats')}>
              Статистика
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
      )}
    </div>
  )
}
