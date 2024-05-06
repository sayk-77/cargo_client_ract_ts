import React, { useEffect } from 'react'
import styles from './setting.module.css'
import { PersonalData } from './personalData'
import { ChangePassword } from './changePassword'
import { BurgerDashBoard } from '../profile/burgerDashBoard'
import { checkAuth } from '../../tools/checkAuth'
import { useNavigate } from 'react-router-dom'

export const Setting: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!checkAuth()) {
      navigate('/authorization')
    }
  }, [])

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
