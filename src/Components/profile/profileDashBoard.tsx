import React from 'react'
import styles from './profileDashBoard.module.css'
import sprite from '../../sprite.svg'
import { Link, useNavigate } from 'react-router-dom'
import { BurgerDashBoard } from './burgerDashBoard'

interface ProfileDashBoardProps {
  activeMenuItem: string
  onMenuItemClick: (menuItem: string) => void
}

export const ProfileDashBoard: React.FC<ProfileDashBoardProps> = ({ activeMenuItem, onMenuItemClick }) => {
  const handleClick = (menuItem: string) => {
    onMenuItemClick(menuItem)
  }

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <section className={styles.dashBoard}>
        <svg height={30} width={130}>
          <use xlinkHref={sprite + '#logo'}></use>
        </svg>
        <div className={styles.panel_menu}>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#profile'}></use>
            </svg>
            <span
              className={activeMenuItem === 'profile' ? styles.active : ''}
              onClick={() => handleClick('profile')}>
              Профиль
            </span>
          </div>
          <div className={styles.panel_link}>
            <svg height={26} width={26}>
              <use xlinkHref={sprite + '#home'}></use>
            </svg>
            <Link to="/">Главная</Link>
          </div>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#order'}></use>
            </svg>
            <span
              className={activeMenuItem === 'order' ? styles.active : ''}
              onClick={() => handleClick('order')}>
              Заказы
            </span>
          </div>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#setting'}></use>
            </svg>
            <span
              className={activeMenuItem === 'setting' ? styles.active : ''}
              onClick={() => handleClick('setting')}>
              Настройки
            </span>
          </div>
        </div>
        <div className={styles.panel_link}>
          <svg height={25} width={25}>
            <use xlinkHref={sprite + '#dashboard_logout'}></use>
          </svg>
          <p onClick={logout} style={{ cursor: 'pointer', fontSize: '18px' }}>
            Выйти
          </p>
        </div>
      </section>
      <BurgerDashBoard />
    </>
  )
}
