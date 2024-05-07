import React, { useState } from 'react'
import styles from './driverModal.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

interface DriverModalProps {
  isOpen: boolean
  onClose: () => void
  driver: {
    ID: number
    firstName: string
    lastName: string
    licenseNumber: string
    transportationCert: string
    status: string
  }
  updateDrivers: () => void
}

export const DriverModal: React.FC<DriverModalProps> = ({ isOpen, onClose, driver, updateDrivers }) => {
  const [firstName, setFirstName] = useState(driver.firstName)
  const [lastName, setLastName] = useState(driver.lastName)
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber)
  const [transportationCert, setTransportationCert] = useState(driver.transportationCert)
  const [status, setStatus] = useState(driver.status)

  const save = async () => {
    const data = {
      ID: driver.ID,
      firstName,
      lastName,
      licenseNumber,
      transportationCert,
      status,
    }
    const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/driver/edit`, data)
    if (response.status === 200) {
      toast.success('Данные успешно обновлены')
      updateDrivers()
      onClose()
    }
  }

  const del = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/driver/delete/${driver.ID}`)
    if (response.status === 200) {
      toast.success('Данные успешно удалены')
      updateDrivers()
      onClose()
    }
  }

  return (
    <div className={`${styles.modal} ${isOpen ? styles.show : ''}`}>
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
        <label htmlFor="licenseNumber" className={styles.label}>
          Номер лицензии
        </label>
        <input
          type="text"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="transportationCert" className={styles.label}>
          Транспортное свидетельство
        </label>
        <input
          type="text"
          value={transportationCert}
          onChange={(e) => setTransportationCert(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="status" className={styles.label}>
          Статус
        </label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
