import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sprite from '../../../sprite.svg'
import Modal from './modalConfirm'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ModalOrder } from './orderModal'

interface Order {
  order: {
    ID: number
    status: string
    cargoType: string
    recipient: string
    orderDate: string
    destinationAddress: string
    sendingAddress: string
    deliveryDate: string
    orderPrice: number
    customer: string
    Client: {
      firstName: string
      lastName: string
    }
    CargoType: {
      typeName: string
    }
  }
  status: string
  updateOrder: () => void
}

export const ElementTable: React.FC<Order> = ({ order, updateOrder }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showOrderModal, setShowOrderModal] = useState<boolean>(false)

  const openModal = () => {
    setShowOrderModal(true)
  }

  const closeModal = () => {
    setShowOrderModal(false)
  }

  let content

  const confirmOrder = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/order/complete/${order.ID}`)
      if (response.status === 200) {
        toast.success('Заказ успешно завершен!')
        updateOrder()
      }
    } catch (er) {
      console.log(er)
    }
    setShowModal(false)
  }

  if (order.status === 'Создан') {
    content = (
      <tr>
        <td>{order.ID}</td>
        <td>{order.status}</td>
        <td>{order.CargoType.typeName}</td>
        <td>{order.orderPrice} рублей</td>
        <td>{`${order.Client.firstName} ${order.Client.lastName}`}</td>
        <td>
          <svg height={14} width={8} style={{ cursor: 'pointer' }} onClick={openModal}>
            <use xlinkHref={sprite + '#arrow_detail'}></use>
          </svg>
        </td>
        {showOrderModal && <ModalOrder onClose={closeModal} id={order.ID} updateOrders={updateOrder} />}
      </tr>
    )
  } else if (order.status === 'В процессе') {
    content = (
      <tr>
        <td>{order.ID}</td>
        <td>{order.destinationAddress}</td>
        <td>{order.sendingAddress}</td>
        <td>{order.orderPrice}</td>
        <td>
          {order.Client.firstName} {order.Client.lastName}
        </td>
        <td>{order.recipient}</td>
        <td>
          <button style={{ padding: '5px' }} onClick={() => setShowModal(true)}>
            <svg height={13} width={18}>
              <use xlinkHref={`${sprite}#ok`}></use>
            </svg>
          </button>
        </td>
      </tr>
    )
  } else {
    content = (
      <tr>
        <td>{order.ID}</td>
        <td>
          {order.Client.firstName} {order.Client.lastName}
        </td>
        <td>{order.recipient}</td>
        <td>{order.orderPrice}</td>
        <td>{order.deliveryDate}</td>
      </tr>
    )
  }

  return (
    <>
      {content}
      {<Modal showModal={showModal} onClose={() => setShowModal(false)} onConfirm={confirmOrder} />}
    </>
  )
}
