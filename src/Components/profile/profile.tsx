import React, { useEffect, useState } from 'react'
import { ProfileDashBoard } from './profileDashBoard'
import { UserInfo } from './userInfo'
import styles from './profile.module.css'
import { Setting } from '../setting/setting'
import { Order } from '../order/order'
import { useNavigate } from 'react-router-dom'

export const Profile: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile')
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/registration')
    }
  }, [])

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem)
  }
  return (
    <section className={styles.profile}>
      <ProfileDashBoard
        activeMenuItem={activeMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      {activeMenuItem === 'profile' && <UserInfo />}
      {activeMenuItem === 'setting' && <Setting />}
      {activeMenuItem === 'order' && <Order />}
    </section>
  )
}
