import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import styles from './popup.module.css'
import { toast } from 'react-toastify'

interface OrderPopupProps {
  show: boolean
  onClose: () => void
  orderId: number
  onDeleteSuccess?: () => void
}

interface Order {
  orderDate: string
  status: string
  deliveryDate: string
  orderPrice: number
  recipient: string
  sendingAddress: string
  destinationAddress: string
  CargoType: {
    typeName: string
  }
}

export const OrderPopup: React.FC<OrderPopupProps> = ({ show, onClose, orderId, onDeleteSuccess }) => {
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const getOrderById = async () => {
      try {
        const response = await axios.get<Order>(`${import.meta.env.VITE_SERVER_API_URL}/order/${orderId}`)
        setOrder(response.data)
      } catch (error) {
        console.error('Error fetching order:', error)
      }
    }
    getOrderById()
  }, [orderId])

  if (!show || !order) {
    return null
  }

  const closePopup = () => {
    onClose()
  }

  const deleteOrder = async (orderId: number): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.delete(
        `${import.meta.env.VITE_SERVER_API_URL}/order/delete/${orderId}`,
      )
      if (response.status === 200) {
        toast.success('Заказ успешно отменен')
        onDeleteSuccess && onDeleteSuccess()
        closePopup()
      }
    } catch (error: any) {
      console.error(error.response.data.error)
    }
  }

  return (
    <section className={styles.popup} onClick={closePopup}>
      <article className={styles['popup-content']} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={closePopup}>
          &times;
        </span>
        <h2>Информация о заказе №{orderId}</h2>
        <article className={styles.orderInfo}>
          <p>
            <strong>Дата создания:</strong> {order?.orderDate}
          </p>
          <p>
            <strong>Статус:</strong> {order?.status}
          </p>
          <p>
            <strong>Тип груза:</strong> {order?.CargoType.typeName}
          </p>
          <p>
            <strong>Адрес назначения:</strong> {order?.destinationAddress}
          </p>
          <p>
            <strong>ФИО получателя:</strong> {order?.recipient}
          </p>
          <p>
            <strong>Адрес отправления:</strong> {order?.sendingAddress}
          </p>
          {order.status !== 'Создан' && order.deliveryDate && (
            <p>
              <strong>Дата доставки:</strong> {order.deliveryDate}
            </p>
          )}
          <p>
            <strong>Цена доставки:</strong> {order?.orderPrice} ₽
          </p>
          {order.status === 'Создан' ? (
            <button onClick={() => deleteOrder(orderId)} className={styles.buttonDelete}>
              Отменить
            </button>
          ) : null}
        </article>
      </article>
    </section>
  )
}
