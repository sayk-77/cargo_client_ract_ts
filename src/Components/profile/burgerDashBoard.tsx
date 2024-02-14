import React from 'react'
// @ts-ignore
import { push as Menu } from 'react-burger-menu'
// @ts-ignore
import sprite from '../../sprite.svg'
import '/src/Components/header/burger.css'
import { Link } from 'react-router-dom'
// @ts-ignore
import styles from './profileDashBoard.module.css'

interface ExampleProps {}

export class BurgerDashBoard extends React.Component<ExampleProps> {
  showSettings(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right width={ 300 } customBurgerIcon={ <svg height={45} width={45}><use xlinkHref={sprite+'#burger'}></use></svg> }>
        <section className="dashBoardBurger">
        <svg height={30} width={130}><use xlinkHref={sprite+'#logo'}></use></svg>
        <div className={styles.panel_menu}>
            <div className={styles.panel_link}>
                <svg height={25} width={25}><use xlinkHref={sprite+'#profile'}></use></svg>
                <Link to="/profile">Профиль</Link>
            </div>
            <div className={styles.panel_link}>
                <svg height={26} width={26}><use xlinkHref={sprite+'#home'}></use></svg>
                <Link to="/">Главная</Link>
            </div>
            <div className={styles.panel_link}>
                <svg height={25} width={25}><use xlinkHref={sprite+'#order'}></use></svg>
                <Link to="/order">Заказы</Link>
            </div>
            <div className={styles.panel_link}>
                <svg height={25} width={25}><use xlinkHref={sprite+'#setting'}></use></svg>
                <Link to="/setting">Настройки</Link>
            </div>
        </div>
        </section>
      </Menu>
    );
  }
}