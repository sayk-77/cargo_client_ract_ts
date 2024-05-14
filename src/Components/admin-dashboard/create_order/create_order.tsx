import React, { useEffect, useState } from 'react'
import styles from './create_order.module.css'
import sprite from '../../../sprite.svg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import { toast } from 'react-toastify'
import { checkRole } from '../../../tools/checkRole'
import ReactInputMask from 'react-input-mask'

interface Order {
  ID: number
  recipient: string
  orderDate: string
  destinationAddress: string
  sendingAddress: string
  deliveryDate: string
  orderPrice: number
  customer: string
  Client: {
    ID: number
    firstName: string
    lastName: string
  }
}

interface Drivers {
  ID: number
  firstName: string
  lastName: string
  Car: {
    ID: number
    brend: string
    model: string
  }
}

export const MakeOrder: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [order, setOrder] = useState<Order>()
  const [drivers, setDrivers] = useState<Drivers[]>([])
  const [deliveryDate, setDeliveryDate] = useState<string>('')
  const [sendDate, setSendDate] = useState<string>('')
  const [arriveDate, setArriveSend] = useState<string>('')
  const [selectedDriver, setSelectedDriver] = useState<ValueType<{ value: string; label: string }>>(null)

  useEffect(() => {
    const role = checkRole()
    if (role === undefined) {
      navigate('/dashboard/login')
    }
  }, [])

  const isValidDate = (dateString: string) => {
    const regex = /^(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])\.\d{4}$/
    return regex.test(dateString)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderResponse = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/order/${id}`)
        if (orderResponse.status === 200) {
          setOrder(orderResponse.data)
        }

        const driversResponse = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/driver/free`)
        if (driversResponse.status === 200) {
          setDrivers(driversResponse.data)
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          toast.error('Данный заказ уже завершен!')
          navigate('/dashboard')
        } else {
          console.error('Error:', error)
          toast.error('Произошла ошибка на стороне сервера')
        }
      }
    }

    fetchData()
  }, [id])

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
      width: '300px',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#000' }),
  }

  const sendOrder = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidDate(deliveryDate) || !isValidDate(sendDate) || !isValidDate(arriveDate)) {
      toast.error('Пожалуйста, введите корректные даты в формате мм.дд.гггг')
      return
    }

    return

    const data = {
      id: order?.ID,
      deliveryDate: deliveryDate,
      sendDate: sendDate,
      arriveDate: arriveDate,
      driverId: selectedDriver ? parseInt(selectedDriver.value) : null,
      carId: selectedDriver
        ? drivers.find((driver) => driver.ID === parseInt(selectedDriver.value))?.Car.ID
        : null,
      expiryDate: '',
      clientId: order?.Client.ID,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/order/confirm`, data)
      if (response.status === 200) {
        toast.success('Заказ успешно подтвержден!')
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.make_order}>
      <form className={styles.make_order_container} onSubmit={sendOrder}>
        <div className={styles.top_order}>
          <p>ID заказа - {order?.ID}</p>
          <p>Дата создания - {order?.orderDate}</p>
        </div>
        <div className={styles.order_info}>
          <div className={styles.user_info_block}>
            <h3>Заказчик</h3>
            <p>
              {order?.Client.firstName} {order?.Client.lastName}
            </p>
          </div>
          <div className={styles.user_info_block}>
            <h3>Получатель</h3>
            <p>{order?.recipient}</p>
          </div>
          <div className={styles.user_info_block}>
            <h3>Пункт отправки</h3>
            <p>{order?.sendingAddress}</p>
          </div>
          <div className={styles.user_info_block}>
            <h3>Пункт назначения</h3>
            <p>{order?.destinationAddress}</p>
          </div>
        </div>
        <div className={styles.order_info_block}>
          <div className={styles.order_info_block_item}>
            <p>Водитель</p>
            <Select
              options={drivers.map((driver) => ({
                value: `${driver.ID}`,
                label: `${driver.firstName} ${driver.lastName}`,
              }))}
              value={selectedDriver}
              styles={customStyles}
              onChange={(option) => setSelectedDriver(option)}
              noOptionsMessage={() => 'Ничего не найдено'}
              placeholder="Выберите водителя"
              required
            />
          </div>
          <div className={styles.order_info_block_item}>
            <p>Автомобиль</p>
            <input
              className={styles.input_order}
              type="text"
              value={
                selectedDriver
                  ? `${drivers.find((driver) => driver.ID === parseInt(selectedDriver.value))?.Car.brend} ${drivers.find((driver) => driver.ID === parseInt(selectedDriver.value))?.Car.model}`
                  : ''
              }
              readOnly
            />
          </div>
        </div>
        <div className={styles.order_info_block}>
          <div className={styles.order_info_block_item}>
            <p>Дата доставки</p>
            <ReactInputMask
              mask="99.99.9999"
              value={deliveryDate}
              className={styles.input_order}
              placeholder="мм.дд.гггг"
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.order_info_block_item}>
            <p>Стоимость доставки</p>
            <p>{order?.orderPrice} рублей</p>
          </div>
        </div>
        <div className={styles.order_info_block}>
          <div className={styles.order_info_block_item}>
            <p>Дата отправления</p>
            <ReactInputMask
              mask="99.99.9999"
              value={sendDate}
              className={styles.input_order}
              placeholder="мм.дд.гггг"
              onChange={(e) => setSendDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.order_info_block_item}>
            <p>Дата прибытия</p>
            <ReactInputMask
              mask="99.99.9999"
              value={arriveDate}
              className={styles.input_order}
              placeholder="мм.дд.гггг"
              onChange={(e) => setArriveSend(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.order_btn}>
          <button className={styles.make_cancel} onClick={() => navigate('/dashboard')}>
            Отмена
          </button>
          <button className={styles.make_ok} type="submit">
            <svg height={13} width={18}>
              <use xlinkHref={`${sprite}#ok`}></use>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
