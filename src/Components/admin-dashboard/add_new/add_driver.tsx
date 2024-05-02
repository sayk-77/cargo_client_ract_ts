import React, { useEffect, useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import ReactInputMask from 'react-input-mask'

interface Car {
  ID: number
  brend: string
  model: string
  year: number
}

export const AddDriver: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [licenseNumber, setLicenseNumber] = useState<string>('')
  const [transportationCert, setTransportationCert] = useState<number>(0)
  const [transportationCertDate, setTransportationCertDate] = useState<string>('')
  const [carId, setCarId] = useState<number>(0)
  const [freeCars, setFreeCars] = useState<Car[]>([])
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

  return (
    <form className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Имя:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className={styles.inputLabel}>Фамилия:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className={styles.inputLabel}>Номер автомобильного удостоверения:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setLicenseNumber(e.target.value)}
        />

        <label className={styles.inputLabel}>Номер сертификата на перевозки:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setTransportationCert(Number(e.target.value))}
        />

        <label className={styles.inputLabel}>Дата окончания лицензии:</label>
        <ReactInputMask
          mask="99.99.9999"
          className={styles.inputField}
          placeholder={new Date().toLocaleDateString()}
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
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
