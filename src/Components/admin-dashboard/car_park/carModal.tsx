import React, { useState } from 'react'
import styles from './modal.module.css'
import { toast } from 'react-toastify'
import axios from 'axios'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  car: {
    ID: number
    brend: string
    model: string
    year: number
    color: string
    mileage: number
    technicalStatus: string
    imageUrl: string
  }
  carUpdate: () => void
}

export const Modal: React.FC<ModalProps> = ({ onClose, car, carUpdate }) => {
  const [brend, setBrend] = useState(car.brend)
  const [model, setModel] = useState(car.model)
  const [year, setYear] = useState(car.year)
  const [color, setColor] = useState(car.color)
  const [mileage, setMileage] = useState<number>(car.mileage)
  const [image, setImage] = useState<File | null>(null)
  const [technicalCondition, setTechnicalCondition] = useState(car.technicalStatus)
  const technicalConditions = ['Плохое', 'Удовлетворительное', 'Хорошее', 'Отличное', 'Новое']

  const save = async () => {
    let url = car.imageUrl

    if (image) {
      const formData = new FormData()
      formData.append('photo', image)

      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/upload`, formData)
      if (response.status === 200) {
        url = response.data.imageURL
      }
    }

    const data = {
      id: car.ID,
      brend: brend,
      model: model,
      year: year,
      color: color,
      mileage: mileage,
      imageUrl: url,
      technicalStatus: technicalCondition,
    }

    const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/car/edit`, data)
    if (response.status === 200) {
      toast.success('Данные успешно изменены')
      carUpdate()
      onClose()
    }
  }

  const del = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/car/delete/${car.ID}`)
    if (response.status === 200) {
      toast.success('Автомобиль успешно удален')
      carUpdate()
      onClose()
    }
  }

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    setImage(file)
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.image}>
          <img
            src={`${import.meta.env.VITE_SERVER_API_URL}/${car.imageUrl}`}
            alt="Car"
            className={styles.modal_image}
          />
          <input type="file" accept="image/*" onChange={imageChange} className={styles.file_input} />
        </div>
        <label htmlFor="brend">Бренд</label>
        <input
          type="text"
          value={brend}
          onChange={(e) => setBrend(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="model">Модель</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="year">Год выпуска</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className={styles.modal_input}
        />
        <label htmlFor="color">Цвет</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={styles.modal_input}
        />
        <label htmlFor="mileage">Пробег</label>
        <input
          type="text"
          value={mileage}
          onChange={(e) => setMileage(Number(e.target.value))}
          className={styles.modal_input}
        />
        <label htmlFor="technicalCondition">Техническое состояние</label>
        <select
          value={technicalCondition}
          onChange={(e) => setTechnicalCondition(e.target.value)}
          className={styles.modal_input}>
          {technicalConditions.map((condition, index) => (
            <option key={index} value={condition}>
              {condition}
            </option>
          ))}
        </select>
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
