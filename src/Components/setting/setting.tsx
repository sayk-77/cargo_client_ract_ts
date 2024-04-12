import React from 'react'
import styles from './setting.module.css'
import { PersonalData } from './personalData'
import { ChangePassword } from './changePassword'

export const Setting: React.FC = () => {
  return (
    <section className={styles.setting}>
      <div className={styles.user_data}>
        <PersonalData />
        <ChangePassword />
      </div>
    </section>
  )
}
