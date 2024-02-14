import React from 'react'
// @ts-ignore
import styles from './setting.module.css'
import { ProfileDashBoard } from '../profile/profileDashBoard'
import { PersonalData } from './personalData'
import { ChangePassword } from './changePassword'

export const Setting:React.FC = () => {
  return (
    <section className={styles.setting}>
        <ProfileDashBoard />
        <div className={styles.user_data}>
            <PersonalData />
            <ChangePassword />
        </div>
    </section>
  )
}