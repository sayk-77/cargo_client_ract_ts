import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import sprite from '../../sprite.svg'
import { Link } from 'react-router-dom'
import styles from './profileDashBoard.module.css'

interface ExampleProps {}

export const BurgerDashBoard: React.FC<ExampleProps> = () => {
  const [isOrdersOpen, setOrdersOpen] = useState(false)

  const toggleOrders = () => {
    setOrdersOpen(!isOrdersOpen)
  }

  const closeMenu = () => {
    setOrdersOpen(false)
  }

  return (
    <Menu
      right
      width={300}
      customBurgerIcon={
        <svg height={45} width={45}>
          <use xlinkHref={sprite + '#burger'}></use>
        </svg>
      }>
      <section className="dashBoardBurger">
        <svg height={30} width={130}>
          <use xlinkHref={sprite + '#logo'}></use>
        </svg>
        <div className={styles.panel_menu}>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#profile'}></use>
            </svg>
            <Link to="/profile" onClick={closeMenu}>
              Профиль
            </Link>
          </div>
          <div className={styles.panel_link}>
            <svg height={26} width={26}>
              <use xlinkHref={sprite + '#home'}></use>
            </svg>
            <Link to="/" onClick={closeMenu}>
              Главная
            </Link>
          </div>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#order'}></use>
            </svg>
            <span onClick={toggleOrders}>Заказы</span>
            {isOrdersOpen && (
              <div className={styles.subMenu}>
                <Link to="/order/create" onClick={closeMenu}>
                  Создать заказ
                </Link>
                <Link to="/order/new" onClick={closeMenu}>
                  Новые
                </Link>
                <Link to="/order/process" onClick={closeMenu}>
                  В процессе
                </Link>
                <Link to="/order/completed" onClick={closeMenu}>
                  Завершенные
                </Link>
              </div>
            )}
          </div>
          <div className={styles.panel_link}>
            <svg height={25} width={25}>
              <use xlinkHref={sprite + '#setting'}></use>
            </svg>
            <Link to="/setting" onClick={closeMenu}>
              Настройки
            </Link>
          </div>
        </div>
      </section>
    </Menu>
  )
}
