import React, { useEffect, useState } from 'react'
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
    const userToken = localStorage.getItem('userToken')

    const getUserInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/client/info`, {
          headers: { Authorization: userToken },
        })

        const data = await response.data
        setUserData(data)
      } catch (err) {
        const axiosError = err as AxiosError<any>
        if (axiosError?.response?.status === 500 && axiosError?.response?.data === 'Invalid Token') {
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
      <div className={styles.info_blocks}>
        <div className={styles.info_block}>
          <p>Имя</p>
          <p>Фамилия</p>
          <p>Адресс</p>
          <p>Номер телефона</p>
          <p>Почта</p>
        </div>
        <div className={styles.info_block}>
          <p>{userData?.firstName}</p>
          <p>{userData?.lastName}</p>
          <p>{userData?.address}</p>
          <p>{userData?.phoneNumber}</p>
          <p>{userData?.email}</p>
        </div>
      </div>
    </section>
  )
}
