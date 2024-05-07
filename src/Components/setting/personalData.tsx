import React, { useEffect, useState } from 'react'
import styles from './personalData.module.css'
import axios from 'axios'

interface PersonalData {
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  email: string
}

export const PersonalData: React.FC = () => {
  const [data, setData] = useState<PersonalData | null>(null)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editedData, setEditedData] = useState<PersonalData>({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    const fetchPersonalData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/client/info`, {
          headers: { Authorization: token },
        })
        const fetchedData = await response.data
        setData(fetchedData)
        setEditedData(fetchedData)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPersonalData()
  }, [])

  const handleEditClick = () => {
    setEditMode(true)
  }

  const saveChangeData = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/client/update`, editedData, {
        headers: { Authorization: token },
      })
      setEditMode(false)
      setData(editedData)
      console.log(editedData)
    } catch (err) {
      console.log(err)
    }
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <section className={styles.personal_data}>
      <h2>Личные данные</h2>
      <div className={styles.data_edit_container}>
        {editMode ? (
          <>
            <div className={styles.data_edit}>
              <p>Имя</p>
              <input type="text" name="firstName" value={editedData.firstName} onChange={changeInput} />
            </div>
            <div className={styles.data_edit}>
              <p>Фамилия</p>
              <input type="text" name="lastName" value={editedData.lastName} onChange={changeInput} />
            </div>
            <div className={styles.data_edit}>
              <p>Адрес</p>
              <input type="text" name="address" value={editedData.address} onChange={changeInput} />
            </div>
            <div className={styles.data_edit}>
              <p>Номер телефона</p>
              <input type="text" name="phoneNumber" value={editedData.phoneNumber} onChange={changeInput} />
            </div>
            <div className={styles.data_edit}>
              <p>Электронная почта</p>
              <input type="text" name="email" value={editedData.email} onChange={changeInput} />
            </div>
            <div className={styles.data_edit}>
              <button onClick={saveChangeData}>Сохранить</button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.data_text}>
              <p>Имя: {data?.firstName}</p>
            </div>
            <div className={styles.data_text}>
              <p>Фамилия: {data?.lastName}</p>
            </div>
            <div className={styles.data_text}>
              <p>Адрес: {data?.address}</p>
            </div>
            <div className={styles.data_text}>
              <p>Номер телефона: {data?.phoneNumber}</p>
            </div>
            <div className={styles.data_text}>
              <p>Электронная почта: {data?.email}</p>
            </div>
            <div className={styles.data_edit}>
              <button onClick={handleEditClick}>Редактировать</button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
