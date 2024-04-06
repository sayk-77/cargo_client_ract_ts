import React from 'react'
// @ts-ignore
import styles from './create_order.module.css'
// @ts-ignore
import sprite from '../../../sprite.svg'
import { useNavigate } from 'react-router-dom'


export const MakeOrder:React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.make_order}>
        <div className={styles.make_order_container}>
            <div className={styles.top_order}>
                <p>ID заказа - 3</p>
                <p>Дата создания - 01.01.2024</p>
            </div>
            <div className={styles.order_info}>
                <div className={styles.user_info_block}>
                    <h3>Заказчик</h3>
                    <p>Крючков Дмитрий</p>
                </div>
                <div className={styles.user_info_block}>
                    <h3>Получатель</h3>
                    <p>Крючков Дмитрий</p>
                </div>
                <div className={styles.user_info_block}>
                    <h3>Пункт отправки</h3>
                    <p>Москва, ул.Свободы, д.43</p>
                </div>
                <div className={styles.user_info_block}>
                    <h3>Пункт назначения</h3>
                    <p>Москва, ул.Свободы, д.43</p>
                </div>
            </div>
            <div className={styles.order_info_block}>
                <div className={styles.order_info_block_item}>
                    <p>Водитель</p>
                    <input className={styles.input_order} type="text" placeholder='Имя водителя' />
                </div>
                <div className={styles.order_info_block_item}>
                    <p>Автомобиль</p>
                    <input className={styles.input_order} type="text" placeholder='Модель автомобиля' />
                </div>
            </div>
            <div className={styles.order_info_block}>
                <div className={styles.order_info_block_item}>
                    <p>Дата доставки</p>
                    <input className={styles.input_order} type="text" placeholder='07.01.2024' />
                </div>
                <div className={styles.order_info_block_item}>
                    <p>Стоимость доставки</p>
                    <p>21 000 рублей</p>
                </div>
            </div>
            <div className={styles.order_info_block}>
                <div className={styles.order_info_block_item}>
                    <p>Дата отправления</p>
                    <input className={styles.input_order} type="text" placeholder='02.01.2024' />
                </div>
                <div className={styles.order_info_block_item}>
                    <p>Дата прибытия</p>
                    <input className={styles.input_order} type="text" placeholder='07.01.2024' />
                </div>
            </div>
            <div className={styles.order_btn}>
                <button className={styles.make_cancel} onClick={() => navigate('/dashboard')}>
                    Отменить
                </button>
                <button className={styles.make_ok}>
                    <svg height={13} width={18}>
                        <use xlinkHref={`${sprite}#ok`}></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}