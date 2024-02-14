import React from 'react'
import { ProfileDashBoard } from './profileDashBoard'
import { UserInfo } from './userInfo'
// @ts-ignore
import styles from './profile.module.css'

export const Profile:React.FC = () => {
  return (
    <section className={styles.profile}>
        <ProfileDashBoard />
        <UserInfo />
    </section>
  )
}