import React, { useState } from 'react'
// @ts-ignore
import styles from './order.module.css'
import { Search_pagination } from '../../search_pagination/search_pagination'
// @ts-ignore
import { TableOrder } from './table'


export const Order: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Создан")

  const changeActiveFilter = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className={styles.order_container}>
        <div className={styles.order_content}>
          <Search_pagination />
          <div className={styles.table_order}>
            <div className={styles.filter}>
              <p 
                className={activeFilter === 'Создан' ? styles.active_filter : ''}
                onClick={() => changeActiveFilter('Создан')}
              >
                Новые
              </p>
              <p 
                className={activeFilter === 'В процессе' ? styles.active_filter : ''}
                onClick={() => changeActiveFilter('В процессе')}
              >
                В процессе
              </p>
              <p 
                className={activeFilter === 'Завершен' ? styles.active_filter : ''}
                onClick={() => changeActiveFilter('Завершен')}
              >
                Завершенные
              </p>
            </div>
            <TableOrder status={activeFilter}/>
          </div>
        </div>
    </div>
  )
}