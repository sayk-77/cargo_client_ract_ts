import React, { useEffect, useState } from 'react'
import styles from './createOrder.module.css'
import axios from 'axios'
import { geocodeByAddresses } from '../../tools/getDistance'
import { useNavigate } from 'react-router-dom'
import { formatDateToYYYYMMDD } from '../../tools/formatDate'
import { BurgerDashBoard } from '../profile/burgerDashBoard'
import { checkAuth } from '../../tools/checkAuth'
import { toast } from 'react-toastify'

interface CargoType {
  ID: number
  typeName: string
  priceCoeff: number
}

export const CreateOrder: React.FC = () => {
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [pickupAddress, setPickupAddress] = useState('')
  const [cargoType, setCargoType] = useState<CargoType[]>([])
  const [weight, setWeight] = useState(0)
  const [size, setSize] = useState(0)
  const [totalPrice, setTotalPrice] = useState<number | null>(null)
  const [selectedCargoType, setSelectedCargoType] = useState<string>('')
  const [distance, setDistance] = useState<number | undefined>(0)
  const [errorAddress, setErrorAddress] = useState<string>('')
  const [errorPrice, setErrorPrice] = useState<string>('')
  const [recipient, setRecipient] = useState<string>('')
  const navigate = useNavigate()

  const calculatePrice = async (): Promise<void> => {
    toast.info('Рассчитываем стоимость заказа...')
    const arrayAddress: string[] = [deliveryAddress, pickupAddress]

    try {
      const result = await geocodeByAddresses(arrayAddress)
      if (result === undefined) {
        setErrorAddress('Не верный формат адреса! Пример: Москва, ул.Победы, д.32')
        return
      }
      setDistance(result)
      setErrorAddress('')
    } catch (error: any) {
      toast.error('Произошла ошибка! Попробуйте позже')
    }

    const basePriceDelivery: number = 1000
    const basePriceKm: number = 20
    const basePriceWeightKg: number = 2
    const baseSizePrice: number = 1.5

    const selectedType = cargoType.find((type) => type.typeName === selectedCargoType)

    if (selectedType && distance !== undefined) {
      const result =
        (basePriceDelivery + weight * basePriceWeightKg + size * baseSizePrice + distance * basePriceKm) *
        selectedType?.priceCoeff
      setTotalPrice(Math.round(result))
      setErrorPrice('')
    }
  }

  const token = localStorage.getItem('userToken')

  const getAllCargoType = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/cargo_type/all`, {
        headers: { Authorization: token },
      })
      const data = await response.data
      setCargoType(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!checkAuth()) {
      navigate('/authorization')
    }
    getAllCargoType()
  }, [])

  const createOrder = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    if (totalPrice === null) {
      setErrorPrice('Сначала расчитайте стоимость!')
      return
    }

    const selectedType = cargoType.find((type) => type.typeName === selectedCargoType)

    const orderData = {
      cargoTypeId: selectedType?.ID,
      destinationAddress: pickupAddress,
      sendingAddress: deliveryAddress,
      orderPrice: totalPrice,
      recipient: recipient,
      createOrder: formatDateToYYYYMMDD(new Date()),
    }

    toast.info('Создание заказа...')

    const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/order/add`, orderData, {
      headers: { Authorization: token },
    })

    if (response.status == 200) {
      toast.success('Заказ создан, ожидайте подстверждения')
      navigate('/profile')
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.back} onClick={() => navigate('/profile')}>
        Вернуться в профиль
      </p>
      <h1>Оформление заказа</h1>
      <form onSubmit={createOrder} className={styles.formOrder}>
        <label className={styles.orderLabel}>
          Адрес доставки:
          <input
            type="text"
            className={styles.orderInput}
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Великий Новгород, ул. Софийская, д.32"
            required
          />
        </label>
        <label className={styles.orderLabel}>
          Адрес отправки:
          <input
            type="text"
            value={pickupAddress}
            className={styles.orderInput}
            onChange={(e) => setPickupAddress(e.target.value)}
            placeholder="Санкт-Петербург, ул. Московская, д.23"
            required
          />
        </label>
        {errorAddress && <div className={styles.error}>{errorAddress}</div>}
        <label className={styles.orderLabel}>
          ФИО получателя:
          <input
            type="text"
            value={recipient}
            className={styles.orderInput}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Иванов Иван Иванович"
            required
          />
        </label>
        <label className={styles.orderLabel}>
          Тип груза:
          <select value={selectedCargoType} onChange={(e) => setSelectedCargoType(e.target.value)}>
            {cargoType.map((type) => (
              <option key={type.ID} value={type.typeName}>
                {type.typeName}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.orderLabel}>
          Вес груза (кг):
          <input
            type="number"
            onChange={(e) => setWeight(Number(e.target.value))}
            className={styles.orderInput}
            placeholder="100"
            required
          />
        </label>
        <label className={styles.orderLabel}>
          Размер груза (м³):
          <input
            type="number"
            onChange={(e) => setSize(Number(e.target.value))}
            className={styles.orderInput}
            placeholder="10"
            required
          />
        </label>
        <div className={styles.price_container}>
          <h3>Стоимость заказа:</h3>
          <p>{totalPrice !== null ? `${totalPrice} рублей` : 'Цена не рассчитана'}</p>
          <button type="button" onClick={calculatePrice}>
            Рассчитать цену
          </button>
        </div>
        {errorPrice && <div className={styles.error}>{errorPrice}</div>}
        <button className={styles.btnSend} type="submit">
          Оформить заказ
        </button>
      </form>
      <BurgerDashBoard />
    </div>
  )
}
