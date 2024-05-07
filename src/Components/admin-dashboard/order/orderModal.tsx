import React, { useEffect, useState } from 'react'
import styles from './orderModal.module.css'
import sprite from '../../../sprite.svg'
import axios from 'axios'
// @ts-ignore
import Select, { ValueType } from 'react-select'
import { toast } from 'react-toastify'

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

interface ModalOrderProps {
  id: number
  onClose: () => void
  updateOrders: () => void
}

export const ModalOrder: React.FC<ModalOrderProps> = ({ id, onClose, updateOrders }) => {
  const [order, setOrder] = useState<Order>()
  const [drivers, setDrivers] = useState<Drivers[]>([])
  const [deliveryDate, setDeliveryDate] = useState<string>('')
  const [sendDate, setSendDate] = useState<string>('')
  const [arriveDate, setArriveSend] = useState<string>('')
  const [selectedDriver, setSelectedDriver] = useState<ValueType<{ value: string; label: string }>>(null)

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
      } catch (error) {
        console.error('Error fetching data:', error)
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

  const sendOrder = async () => {
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
        updateOrders()
        onClose()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const del = async () => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_API_URL}/order/delete/${id}`)
    if (response.status === 200) {
      toast.success('Заказ успешно удален!')
      updateOrders()
      onClose()
    }
  }

  return (
    <div className={styles.make_order}>
      <div className={styles.make_order_container}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
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
            <input
              className={styles.input_order}
              onChange={(e) => setDeliveryDate(e.target.value)}
              type="text"
              placeholder="07.01.2024"
            />
          </div>
          <div className={styles.order_info_block_item}>
            <p>Стоимость доставки</p>
            <input className={styles.input_order} type="text" value={order?.orderPrice} readOnly />
          </div>
        </div>
        <div className={styles.order_info_block}>
          <div className={styles.order_info_block_item}>
            <p>Дата отправления</p>
            <input
              className={styles.input_order}
              type="text"
              onChange={(e) => setSendDate(e.target.value)}
              placeholder="02.01.2024"
            />
          </div>
          <div className={styles.order_info_block_item}>
            <p>Дата прибытия</p>
            <input
              className={styles.input_order}
              onChange={(e) => setArriveSend(e.target.value)}
              type="text"
              placeholder="07.01.2024"
            />
          </div>
        </div>
        <div className={styles.order_btn}>
          <div className={styles.move}>
            <button className={styles.delete} onClickCapture={del}>
              Удалить
            </button>
            <div>
              <button className={styles.make_cancel} onClick={onClose}>
                Отмена
              </button>
              <button className={styles.make_ok} onClick={sendOrder}>
                <svg height={13} width={18}>
                  <use xlinkHref={`${sprite}#ok`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
