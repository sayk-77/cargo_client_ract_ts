import React from 'react'
import styles from './setting.module.css'
import { PersonalData } from './personalData'
import { ChangePassword } from './changePassword'
import { BurgerDashBoard } from '../profile/burgerDashBoard'

export const Setting: React.FC = () => {
  return (
    <section className={styles.setting}>
      <div className={styles.user_data}>
        <PersonalData />
        <ChangePassword />
      </div>
      <BurgerDashBoard />
    </section>
  )
}
