import React, { useState } from 'react'
// @ts-ignore
import styles from './dashboard.module.css'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { Link, useNavigate } from 'react-router-dom'

export const Dashboard:React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('orders')
  const navigate = useNavigate();

  const changeActiveItem = (itemName: string) : void => {
    setActiveItem(itemName)
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
          <li
            className={`${styles.dashboard_navigate__item} ${activeItem === 'orders' && styles.dashboard_navigate__active}`}
            onClick={() => changeActiveItem('orders')}
          >
            <Link to="/dashboard/order">
              <svg height={25} width={25}>
                <use xlinkHref={`${sprite}#dashboard_order`}></use>
              </svg>
              Заказы
            </Link>
          </li>
          <li
            className={`${styles.dashboard_navigate__item} ${activeItem === 'drivers' && styles.dashboard_navigate__active}`}
            onClick={() => changeActiveItem('drivers')}
          >
            <Link to="/dashboard/driver">
              <svg height={25} width={25}>
                <use xlinkHref={`${sprite}#dashboard_driver`}></use>
              </svg>
              Водители
            </Link>
          </li>
          <li
            className={`${styles.dashboard_navigate__item} ${activeItem === 'carPark' && styles.dashboard_navigate__active}`}
            onClick={() => changeActiveItem('carPark')}
          >
            <Link to="/dashboard/car_park">
              <svg height={25} width={25}>
                <use xlinkHref={sprite + '#dashboard_car_park'}></use>
              </svg>
              Автопарк
            </Link>
          </li>        
          <li
            className={`${styles.dashboard_navigate__item} ${activeItem === 'customers' && styles.dashboard_navigate__active}`}
            onClick={() => changeActiveItem('customers')}
          >
            <Link to="/dashboard/customer">
              <svg height={25} width={25}>
                <use xlinkHref={sprite + '#dashboard_customers'}></use>
              </svg>
              Клиенты
            </Link>
          </li>
          <li>
            <a style={{"cursor" : "pointer"}} onClick={logout}>
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