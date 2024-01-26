import React from 'react';
// @ts-ignore
import { elastic as Menu } from 'react-burger-menu';
// @ts-ignore
import sprite from '../../sprite.svg'
import './burger.css'

interface ExampleProps {}

export class Example extends React.Component<ExampleProps> {
  showSettings(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right width={ 300 } customBurgerIcon={ <svg height={45} width={45}><use xlinkHref={sprite+'#burger'}></use></svg> }>
        <a id="home" className="menu-item" href="/">
          Войти
        </a>
        <a id="about" className="menu-item" href="/about">
          Регистрация
        </a>
        <a id="contact" className="menu-item" href="/contact">
          О нас
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Контакты
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Задать вопрос
        </a>
      </Menu>
    );
  }
}
