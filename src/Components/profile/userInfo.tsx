import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './userInfo.module.css'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

interface UserInfo {
  id: number
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  email: string
}

export const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserInfo | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          'http://192.168.105:5000/client/info',
          {
            headers: { Authorization: userToken },
          },
        )

        const data = await response.data
        setUserData(data)
      } catch (err) {
        const axiosError = err as AxiosError<any>
        if (
          axiosError?.response?.status === 500 &&
          axiosError?.response?.data === 'Invalid Token'
        ) {
          localStorage.removeItem('token')
          navigate('/authorization')
        }
      }
    }

    getUserInfo()
  }, [])

  return (
    <section className={styles.userInfo}>
      <h3>Личная информация</h3>
      <img src="/src/assets/user_avatar_100px.png" alt="" />
      <div className={styles.info_blocks}>
        <div className={styles.info_block}>
          <p>Имя</p>
          <p>{userData?.firstName}</p>
        </div>
        <div className={styles.info_block}>
          <p>Фамилия</p>
          <p>{userData?.lastName}</p>
        </div>
        <div className={styles.info_block}>
          <p>Адрес</p>
          <p>{userData?.address}</p>
        </div>
        <div className={styles.info_block}>
          <p>Номер телефона</p>
          <p>{userData?.phoneNumber}</p>
        </div>
        <div className={styles.info_block}>
          <p>Электронная почта</p>
          <p>{userData?.email}</p>
        </div>
      </div>
    </section>
  )
}
