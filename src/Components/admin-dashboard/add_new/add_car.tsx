import React, { useState } from 'react'
import styles from './add_car.module.css'

export const AddCar: React.FC = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [mileage, setMileage] = useState('')
  const [condition, setCondition] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const addCar = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Отправлено:', { brand, model, color, mileage, condition })
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={addCar}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Бренд:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setBrand(e.target.value)}
        />

        <label className={styles.inputLabel}>Модель:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setModel(e.target.value)}
        />

        <label className={styles.inputLabel}>Цвет:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setColor(e.target.value)}
        />

        <label className={styles.inputLabel}>Пробег:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setMileage(e.target.value)}
        />

        <label className={styles.inputLabel}>Техническое состояние:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setCondition(e.target.value)}
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
