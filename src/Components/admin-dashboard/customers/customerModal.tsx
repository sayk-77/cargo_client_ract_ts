import React, { useState } from 'react'
import styles from './customerModal.module.css'
import ReactInputMask from 'react-input-mask'
import axios from 'axios'
import { toast } from 'react-toastify'

interface CustomerModalProps {
  onClose: () => void
  customer: {
    ID: number
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    email: string
  }
  updateClients: () => void
}

export const CustomerModal: React.FC<CustomerModalProps> = ({ onClose, customer, updateClients }) => {
  const [firstName, setFirstName] = useState(customer.firstName)
  const [lastName, setLastName] = useState(customer.lastName)
  const [address, setAddress] = useState(customer.address)
  const [phoneNumber, setPhoneNumber] = useState(customer.phoneNumber)
  const [email, setEmail] = useState(customer.email)

  const save = async () => {
    const data = {
      ID: customer.ID,
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
    }
    const reponse = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/client/update`, data)
    if (reponse.status === 200) {
      toast.success('Данные успешно обновлены')
      updateClients()
      onClose()
    }
  }

  const del = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/client/delete/${customer.ID}`)
    if (response.status === 200) {
      toast.success('Пользователь успешно удален')
      updateClients()
      onClose()
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <label htmlFor="firstName" className={styles.label}>
          Имя
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="lastName" className={styles.label}>
          Фамилия
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="address" className={styles.label}>
          Адрес
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="phoneNumber" className={styles.label}>
          Номер телефона
        </label>
        <ReactInputMask
          className={styles.modal_input}
          mask="+7 (999) 999 99 99"
          value={phoneNumber}
          maskChar=" "
          placeholder="+7 (---) --- -- --"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="email" className={styles.label}>
          Электронная почта
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.modal_input}
        />
        <div className={styles.move}>
          <button onClick={del} className={styles.modal_button_del}>
            Удалить
          </button>
          <button onClick={save} className={styles.modal_button}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  )
}
