import React, { useState } from 'react'
import styles from './add_car.module.css'

export const AddOrder: React.FC = () => {
  const [userId, setUserId] = useState<number>(0)
  const [destAddress, setDestAddress] = useState<string>('')
  const [sendAddress, setSendAddress] = useState<string>('')
  const [cargoTypeId, setCargoTypeId] = useState<number>(0)
  const [recipient, setRecipient] = useState<string>('')
  const [orderPrice, setOrderPrice] = useState<number>(0)

  return (
    <form className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Клиент:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <label className={styles.inputLabel}>Адрес отправления:</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setSendAddress(e.target.value)}
        />
        <label className={styles.inputLabel}>Адрес доставки</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setDestAddress(e.target.value)}
        />
        <label className={styles.inputLabel}>Тип груза</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setCargoTypeId(Number(e.target.value))}
        />
        <label className={styles.inputLabel}>Цена доставки</label>
        <input
          type="text"
          className={styles.inputField}
          onChange={(e) => setOrderPrice(Number(e.target.value))}
        />
        <label className={styles.inputLabel}>Стоимость доставки:</label>
        <div style={{ textAlign: 'center' }}>0</div>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.submitButton}>
          Добавить
        </button>
        <button className={styles.submitButton}>Расчитать стоимость</button>
      </div>
    </form>
  )
}
