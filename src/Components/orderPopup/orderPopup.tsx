import React, { useEffect, useState } from 'react';
import axios from 'axios';
// @ts-ignore
import styles from './popup.module.css';

interface OrderPopupProps {
    show: boolean;
    onClose: () => void;
    orderId: number;
}

interface Order {
    orderDate: string;
    status: string;
    deliveryDate: string;
    orderPrice: number;
    sendingAddress: string;
    destinationAddress: string;
    CargoType: {
        typeName: string;
    };
}

export const OrderPopup: React.FC<OrderPopupProps> = ({ show, onClose, orderId }) => {
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        const getOrderById = async () => {
        try {
            const response = await axios.get<Order>(`http://192.168.0.105:5000/order/${orderId}`);
            setOrder(response.data);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
        };
        getOrderById();
    }, [orderId]);

    if (!show || !order) {
        return null;
    }

    const closePopup = () => {
        onClose();
    };

    return (
        <section className={styles.popup} onClick={closePopup}>
          <article className={styles['popup-content']} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closePopup}>
              &times;
            </span>
            <h2>Информация о заказе №{orderId}</h2>
            <article className={styles.orderInfo}>
              <p>Дата создания: {order?.orderDate}</p>
              <p>Статус: {order?.status}</p>
              <p>Тип груза: {order?.CargoType.typeName}</p>
              <p>Адрес назначения: {order?.destinationAddress}</p>
              <p>Адрес отправления: {order?.sendingAddress}</p>
              {order.status !== 'Создан' && order.deliveryDate && (
                <p>Дата доставки: {order.deliveryDate}</p>
              )}
              <p>Цена доставки: {order?.orderPrice} ₽</p>
            </article>
          </article>
        </section>
      );
    
};  
