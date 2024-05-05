import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './pagination.module.css'

interface PaginationProps {
  pageCount: number
  currentPage: number
  pageChange: (selected: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, pageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={({ selected }) => pageChange(selected)}
      initialPage={currentPage - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={5}
      previousLabel={'Назад'}
      nextLabel={'Вперед'}
      containerClassName={styles.paginationBttns}
      previousLinkClassName={styles.previousBttn}
      nextLinkClassName={styles.nextBttn}
      disabledClassName={styles.paginationDisabled}
      activeClassName={styles.paginationActive}
    />
  )
}
