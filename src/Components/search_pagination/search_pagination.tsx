import React from 'react'
import styles from './search_pagination.module.css'

export const Search_pagination: React.FC = () => {
  return (
    <div className={styles.search_pagination}>
      <div className={styles.search_input}>
        <input type="text" name="search" className={styles.search} />
        <i className={styles.search_icon}></i>
        <button className={styles.search_btn}>Поиск</button>
      </div>
      <div className={styles.pagination}>
        <ul>
          <li>
            <a href="#" className={`${styles.pagination__item} ${styles.pagination__item__active}`}>
              1
            </a>
          </li>
          <li>
            <a href="#" className={styles.pagination__item}>
              2
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
