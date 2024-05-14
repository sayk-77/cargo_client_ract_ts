import React, { useState } from 'react'
import styles from './add_car.module.css'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AddCar: React.FC = () => {
  const [brand, setBrand] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [mileage, setMileage] = useState<number>(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedTechnicalCondition, setSelectedTechnicalCondition] = useState<string | undefined>('Плохое')
  const technicalCondition = ['Плохое', 'Удовлетворительное', 'Хорошее', 'Отличное', 'Новое']

  const addCar = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
      console.error('Файл не выбран')
      return
    }

    const formData = new FormData()
    formData.append('photo', selectedFile)

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.status === 200) {
        const imageIrl = await response.data.imageURL
        const data = {
          brend: brand,
          model: model,
          year: year,
          color: color,
          mileage: mileage,
          imageUrl: imageIrl,
          technicalStatus: selectedTechnicalCondition,
        }

        try {
          const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/car/add`, data)
          if (response.status === 200) {
            toast.success('Машина добавлена')
            resetForm()
          }
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
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

  const resetForm = () => {
    setBrand('')
    setModel('')
    setColor('')
    setYear(0)
    setMileage(0)
    setSelectedFile(null)
    setSelectedTechnicalCondition('Плохое')
  }

  return (
    <form className={styles.formContainer} onSubmit={addCar}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Бренд:</label>
        <input
          type="text"
          className={styles.inputField}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Модель:</label>
        <input
          type="text"
          className={styles.inputField}
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Цвет:</label>
        <input
          type="text"
          className={styles.inputField}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Пробег:</label>
        <input
          type="number"
          className={styles.inputField}
          value={mileage === 0 ? '' : mileage}
          onChange={(e) => setMileage(Number(e.target.value))}
          required
        />

        <label className={styles.inputLabel}>Год выпуска:</label>
        <input
          type="number"
          className={styles.inputField}
          value={year === 0 ? '' : year}
          onChange={(e) => setYear(Number(e.target.value))}
          required
        />

        <label className={styles.inputLabel}>Техническое состояние:</label>
        <Select
          options={technicalCondition.map((condition) => ({
            value: condition,
            label: condition,
          }))}
          value={{ value: selectedTechnicalCondition, label: selectedTechnicalCondition }}
          styles={customStyles}
          onChange={(option) => setSelectedTechnicalCondition(option?.value)}
          noOptionsMessage={() => 'Состояний не найдено'}
          placeholder="Выберите состояние"
          required
        />

        <label className={styles.inputLabel}>Картинка:</label>
        <div className={styles.container}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className={styles.fileInput}
            onChange={fileChange}
          />
          <div className={styles.customFileInput}>Выберите файл</div>
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
