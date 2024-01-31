import React from 'react'
// @ts-ignore
import { push as Menu } from 'react-burger-menu'
// @ts-ignore
import sprite from '../../sprite.svg'
import './burger.css'

interface ExampleProps {}

export class BurgerMenu extends React.Component<ExampleProps> {
  showSettings(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right width={ 300 } customBurgerIcon={ <svg height={45} width={45}><use xlinkHref={sprite+'#burger'}></use></svg> }>
        <a href=""><svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg></a>
        <a id="log" className="menu-item" href="/">
          Войти
        </a>
        <a id="reg" className="menu-item" href="/about">
          Регистрация
        </a>
        <a id="about" className="menu-item" href="/contact">
          О нас
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Контакты
        </a>
        <a id="quest" className="menu-item" href="/contact">
          Задать вопрос
        </a>
      </Menu>
    );
  }
}
