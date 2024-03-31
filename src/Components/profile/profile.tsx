import React, {useEffect, useState} from 'react'
import { ProfileDashBoard } from './profileDashBoard'
import { UserInfo } from './userInfo'
// @ts-ignore
import styles from './profile.module.css'
import { Setting } from '../setting/setting'
import { Order } from '../order/order'

export const Profile: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile');

  const handleMenuItemClick = (menuItem: string) => {
      setActiveMenuItem(menuItem);
  };
  return (
    <section className={styles.profile}>
      <ProfileDashBoard activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick} />
      {activeMenuItem === 'profile' && <UserInfo />}
      {activeMenuItem === 'setting' && <Setting />}
      {activeMenuItem === 'order' && <Order />}
    </section>
  )
}
