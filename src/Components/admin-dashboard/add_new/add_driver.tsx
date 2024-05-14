import React, { useEffect, useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import ReactInputMask from 'react-input-mask'
import { toast } from 'react-toastify'

interface Car {
  ID: number
  brend: string
  model: string
  year: number
}

export const AddDriver: React.FC = () => {
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [licenseNumber, setLicenseNumber] = useState<string>()
  const [transportationCert, setTransportationCert] = useState<string>()
  const [transportationCertDate, setTransportationCertDate] = useState<string>()
  const [selectedCar, setSelectedCar] = useState<ValueType<{ value: string; label: string }>>(null)
  const [filteredCars, setFilteredCars] = useState<Car[]>([])

  useEffect(() => {
    const getFreeCar = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/car/free`)
        if (response.status === 200) {
          setFilteredCars(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getFreeCar()
  }, [])

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setLicenseNumber('')
    setTransportationCert('')
    setTransportationCertDate('')
    setSelectedCar(null)
  }

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? '#fff' : '#000',
      backgroundColor: state.isSelected ? '#0bd366' : '#fff',
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      border: 'none',
      boxShadow: 'nonde',
      backgroundColor: '#f6f6f6',
      minWidth: '440px',
      maxWidth: '440px',
      height: '41px',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#000' }),
  }

  const addDriver = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCar) {
      toast.error('Выберите авто')
      return
    }

    const carID = Number(selectedCar.value)

    const data = {
      firstName: firstName,
      lastName: lastName,
      licenseNumber: licenseNumber,
      transportationCert: transportationCert?.toUpperCase(),
      transportationCertDate: transportationCertDate,
      status: 'Свободен',
      carId: carID,
    }

    console.log(data)

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/driver/add`, data)
      if (response.status === 200) {
        toast.success('Водитель добавлен')
        resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={addDriver}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Имя:</label>
        <input
          type="text"
          className={styles.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Фамилия:</label>
        <input
          type="text"
          className={styles.inputField}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Номер автомобильного удостоверения:</label>
        <ReactInputMask
          mask="99 99 999999"
          value={licenseNumber}
          className={styles.inputField}
          placeholder="99 99 999999"
          onChange={(e) => setLicenseNumber(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Номер сертификата на перевозки:</label>
        <ReactInputMask
          mask="aa 999999"
          value={transportationCert}
          className={styles.inputField}
          placeholder="АА 999999"
          onChange={(e) => setTransportationCert(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Дата окончания лицензии:</label>
        <ReactInputMask
          mask="99.99.9999"
          value={transportationCertDate}
          className={styles.inputField}
          placeholder={new Date().toLocaleDateString()}
          onChange={(e) => setTransportationCertDate(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Автомобиль:</label>
        <Select
          options={filteredCars.map((car) => ({
            value: `${car.ID}`,
            label: `${car.brend} ${car.model} ${car.year}`,
          }))}
          value={selectedCar}
          styles={customStyles}
          onChange={(option) => setSelectedCar(option)}
          noOptionsMessage={() => 'Свободных авто нет'}
          placeholder="Выберите авто"
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
