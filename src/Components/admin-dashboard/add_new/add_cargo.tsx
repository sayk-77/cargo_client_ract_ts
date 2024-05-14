import React, { useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import { toast } from 'react-toastify'

export const AddCargo: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priceCoeff, setPriceCoeff] = useState<number>(0.0)

  const addCargoType = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      typeName: name,
      descriptionType: description,
      priceCoeff: priceCoeff,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/cargo_type/add`, data)
      if (response.status == 200) {
        toast.success('Тип груза успешно добавлен')
        resetForm()
      }
    } catch (error) {
      console.log(error)
      toast.error('Ошибка при добавлении типа груза')
    }
  }

  const resetForm = () => {
    setName('')
    setDescription('')
    setPriceCoeff(0)
  }

  return (
    <form className={styles.formContainer} onSubmit={addCargoType}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Название:</label>
        <input
          type="text"
          className={styles.inputField}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Описание:</label>
        <textarea
          className={styles.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label className={styles.inputLabel}>Коэффицент цены:</label>
        <input
          type="number"
          className={styles.inputField}
          value={priceCoeff == 0.0 ? '' : priceCoeff}
          onChange={(e) => setPriceCoeff(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Добавить
      </button>
    </form>
  )
}
