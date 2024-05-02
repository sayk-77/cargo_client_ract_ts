import React, { useEffect, useState } from 'react'
import styles from './add_car.module.css'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import { geocodeByAddresses } from '../../../tools/getDistance'
import { toast } from 'react-toastify'

interface Client {
  ID: number
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  address: string
}

interface CargoType {
  ID: number
  typeName: string
  descriptionType: string
  priceCoeff: number
}

export const AddOrder: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([])
  const [cargoTypes, setCargoTypes] = useState<CargoType[]>([])
  const [filteredClients, setFilteredClients] = useState<Client[]>([])
  const [filteredCargoTypes, setFilteredCargoTypes] = useState<CargoType[]>([])
  const [selectedClient, setSelectedClient] = useState<ValueType<{
    value: string
    label: string
  }> | null>(null)
  const [selectedCargoType, setSelectedCargoType] = useState<ValueType<{
    value: string
    label: string
  }> | null>(null)
  const [sendAddress, setSendAddress] = useState<string>('')
  const [destAddress, setDestAddress] = useState<string>('')
  const [recipient, setRecipient] = useState<string>('')
  const [distance, setDistance] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [size, setSize] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const clientsResponse = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/client/all`)
      if (clientsResponse.status === 200) {
        setClients(clientsResponse.data)
        setFilteredClients(clientsResponse.data)
      }
      const cargoTypesResponse = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/cargo_type/all`,
      )
      if (cargoTypesResponse.status === 200) {
        setCargoTypes(cargoTypesResponse.data)
        setFilteredCargoTypes(cargoTypesResponse.data)
      }
    }
    fetchData()
  }, [])

  const resetForm = () => {
    setSelectedClient(null)
    setSelectedCargoType(null)
    setSendAddress('')
    setDestAddress('')
    setRecipient('')
    setDistance(0)
    setWeight(0)
    setSize(0)
    setTotalPrice(0)
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
      boxShadow: 'none',
      backgroundColor: '#f6f6f6',
      minWidth: '440px',
      maxWidth: '440px',
      height: '41px',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#000' }),
  }

  const calculatePrice = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    const arrayAddress: string[] = [destAddress, sendAddress]

    try {
      const result = await geocodeByAddresses(arrayAddress)
      if (result === undefined) {
        toast.error('Error')
        return
      }
      setDistance(result)
    } catch (error: any) {
      console.error('Ошибка при выполнении геокодирования:', error.message)
    }

    const basePriceDelivery: number = 1000
    const basePriceKm: number = 20
    const basePriceWeightKg: number = 2
    const baseSizePrice: number = 1.5

    const selectedType = cargoTypes.find((type) => type.ID === Number(selectedCargoType?.value))

    if (selectedType && distance !== undefined) {
      const { priceCoeff } = selectedType
      console.log(priceCoeff, weight, size, distance)
      const result =
        (basePriceDelivery +
          weight * basePriceWeightKg +
          size * baseSizePrice +
          distance * basePriceKm) *
        priceCoeff
      setTotalPrice(Math.round(result))
    }
  }

  const createOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (totalPrice === undefined) {
      toast.error('Сначала необходимо расчитать стоимость!')
      return
    }

    const selectClient = clients.find((client) => client.ID === Number(selectedClient?.value))
    const selectCargo = cargoTypes.find((type) => type.ID === Number(selectedCargoType?.value))
    const data = {
      clientId: selectClient?.ID,
      cargoTypeId: selectCargo?.ID,
      recepient: recipient,
      destinationAddress: destAddress,
      sendingAddress: sendAddress,
      orderPrice: totalPrice,
    }

    const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/order/add`, data)
    if (response.status === 200) {
      toast.success('Заказ успешно создан!')
      resetForm()
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={createOrder}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Клиент:</label>
        <Select
          options={filteredClients.map((client) => ({
            value: `${client.ID}`,
            label: `${client.firstName} ${client.lastName} ${client.email}`,
          }))}
          value={selectedClient}
          styles={customStyles}
          onChange={(option) => setSelectedClient(option)}
          onInputChange={(inputValue) =>
            setFilteredClients(
              clients.filter((client) =>
                `${client.firstName} ${client.lastName} ${client.email}`
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()),
              ),
            )
          }
          noOptionsMessage={() => 'Пользователей нет'}
          placeholder="Выберите пользователя"
          required
        />
        <label className={styles.inputLabel}>Адрес отправления:</label>
        <input
          type="text"
          value={sendAddress}
          className={styles.inputField}
          onChange={(e) => setSendAddress(e.target.value)}
          required
        />
        <label className={styles.inputLabel}>Адрес доставки</label>
        <input
          type="text"
          value={destAddress}
          className={styles.inputField}
          onChange={(e) => setDestAddress(e.target.value)}
          required
        />
        <label className={styles.inputLabel}>Тип груза</label>
        <Select
          options={filteredCargoTypes.map((type) => ({
            value: `${type.ID}`,
            label: `${type.typeName} ${type.descriptionType}`,
          }))}
          value={selectedCargoType}
          styles={customStyles}
          onChange={(option) => setSelectedCargoType(option)}
          onInputChange={(inputValue) =>
            setFilteredCargoTypes(
              cargoTypes.filter((type) =>
                `${type.typeName} ${type.descriptionType}`
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()),
              ),
            )
          }
          noOptionsMessage={() => 'Нет типов грузов'}
          placeholder="Выберите тип груза"
          required
        />
        <label className={styles.inputLabel}>Размер груза:</label>
        <input
          type="number"
          value={size}
          className={styles.inputField}
          onChange={(e) => setSize(Number(e.target.value))}
          required
        />
        <label className={styles.inputLabel}>Вес груза:</label>
        <input
          type="number"
          value={weight}
          className={styles.inputField}
          onChange={(e) => setWeight(Number(e.target.value))}
          required
        />
        <label className={styles.inputLabel}>Получатель</label>
        <input
          type="text"
          value={recipient}
          className={styles.inputField}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <label className={styles.inputLabel}>Стоимость доставки:</label>
        <div style={{ textAlign: 'center' }}>{totalPrice}</div>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.submitButton}>
          Добавить
        </button>
        <button className={styles.submitButton} onClick={calculatePrice}>
          Расчитать стоимость
        </button>
      </div>
    </form>
  )
}
