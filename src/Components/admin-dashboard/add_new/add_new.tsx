import React, { useState } from 'react'
import styles from './add_new.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
import { AddCar } from './add_car'
import { AddDriver } from './add_driver'
import { AddEmployes } from './add_employes'
import { AddOrder } from './add_order'

export const AddNew: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Авто')

  const changeActiveItem = (item: string) => {
    setActiveItem(item)
  }

  return (
    <section>
      <Search_pagination />
      <div className={styles.select_item}>
        <p
          onClick={() => changeActiveItem('Авто')}
          className={activeItem === 'Авто' ? styles.active : ''}>
          Авто
        </p>
        <p
          onClick={() => changeActiveItem('Водитель')}
          className={activeItem === 'Водитель' ? styles.active : ''}>
          Водитель
        </p>
        <p
          onClick={() => changeActiveItem('Сотрудник')}
          className={activeItem === 'Сотрудник' ? styles.active : ''}>
          Сотрудник
        </p>
        <p
          onClick={() => changeActiveItem('Заказ')}
          className={activeItem === 'Заказ' ? styles.active : ''}>
          Заказ
        </p>
      </div>
      {activeItem === 'Авто' && <AddCar />}
      {activeItem === 'Водитель' && <AddDriver />}
      {activeItem === 'Сотрудник' && <AddEmployes />}
      {activeItem === 'Заказ' && <AddOrder />}
    </section>
  )
}
