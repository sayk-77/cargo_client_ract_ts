import React from 'react'
// @ts-ignore
import { push as Menu } from 'react-burger-menu'
// @ts-ignore
import sprite from '../../sprite.svg'
import './burger.css'
import { Link } from 'react-router-dom'

interface ExampleProps {}

export class BurgerMenu extends React.Component<ExampleProps> {
  showSettings(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
  }

  render() {
    const token = localStorage.getItem('token')

    return (
      <Menu
        right
        width={300}
        customBurgerIcon={
          <svg height={45} width={45}>
            <use xlinkHref={sprite + '#burger'}></use>
          </svg>
        }>
        <Link to="/">
          <svg height={30} width={130}>
            <use xlinkHref={sprite + '#logo'}></use>
          </svg>
        </Link>
        {token ? (
          <Link to="/profile" className="menu-item">
            Профиль
          </Link>
        ) : (
          <>
            <Link to="/authorization" className="menu-item">
              Войти
            </Link>
            <Link to="/registration" className="menu-item">
              Регистрация
            </Link>
          </>
        )}
        <Link id="/about" className="menu-item" to="/about">
          О нас
        </Link>
        <Link id="/contact" className="menu-item" to="/contacts">
          Контакты
        </Link>
        <Link id="/quest" className="menu-item" to="/ask-question">
          Задать вопрос
        </Link>
      </Menu>
    )
  }
}
