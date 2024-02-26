import React, { useEffect, useState } from 'react';
// @ts-ignore
import styles from './createOrder.module.css';
import axios from 'axios';
import { geocodeByAddresses } from '../../tools/getDistance';

interface CargoType {
    id: number;
    typeName: string;
    PriceCoeff: number
  }

export const CreateOrder: React.FC = () => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [cargoType, setCargoType] = useState<CargoType[]>([])
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [selectedCargoType, setSelectedCargoType] = useState<string>('');
  const [distance, setDistance] = useState<number | undefined>(0)
  const [error, setError] = useState<string>("")

  const calculatePrice = (): void => {
    const basePriceDelivery : number = 1000
    const basePriceKm: number = 20
    const basePriceWeightKg: number = 2
    const baseSizePrice : number= 1.5

    const selectedType = cargoType.find((type) => type.typeName === selectedCargoType)

    if (selectedType && distance !== undefined) {
      const result = (basePriceDelivery + weight * basePriceWeightKg + size * baseSizePrice + distance * basePriceKm) * selectedType?.PriceCoeff
      setTotalPrice(Math.round(result))
    }
  };

  const token = localStorage.getItem('token')

  useEffect(() => {
    const getAllCargoType = async () => {
        try {
            const response = await axios.get('http://192.168.0.105:5000/cargo_type/all',
            {
                headers: {Authorization: token}
            })
            const data = await response.data
            setCargoType(data)
        } catch (err) {
            console.log(err);
        }
    }
    getAllCargoType()
  }, [])

  const CalculatePrice = async () : Promise<void> => {
    const arrayAddress: string[] = [deliveryAddress, pickupAddress];

    try {
        const result = await geocodeByAddresses(arrayAddress);
        if (result === undefined) {
          setError("Не верный формат адреса! Пример: Москва, ул.Победы, д.32")
        }
        setDistance(result)

        calculatePrice()

    } catch (error : any) {
        console.error("Ошибка при выполнении геокодирования:", error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

  };

  return (
  <div className={styles.container}>
    <h1>Оформление заказа</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Адрес доставки:
        <input
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)} 
          placeholder='Великий Новгород, ул. Софийская, д.32'
          required
        />
      </label>
      <label>
        Адрес отправки:
        <input
          type="text"
          value={pickupAddress}
          onChange={(e) => setPickupAddress(e.target.value)} 
          placeholder='Санкт-Петербург, ул. Московская, д.23'
          required
        />
      </label>
      {error && <div className={styles.error}>{error}</div>}
      <label>
        Тип груза:
        <select value={selectedCargoType} onChange={(e) => setSelectedCargoType(e.target.value)}>
          {cargoType.map((type) => (
            <option key={type.id} value={type.typeName}>
              {type.typeName}
            </option>
          ))}
        </select>
      </label>
      <label>
        Вес груза (кг):
        <input
          type="number"
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder='100'
          required
        />
      </label>
      <label>
        Размер груза (м³):
        <input
          type="number"
          onChange={(e) => setSize(Number(e.target.value))}
          placeholder='10'
          required
        />
      </label>
      <div className={styles.price_container}>
        <h3>Стоимость заказа:</h3>
        <p>{totalPrice !== null ? `${totalPrice} рублей` : 'Цена не рассчитана'}</p>
        <button onClick={CalculatePrice}>Рассчитать цену</button>
      </div>
      <button className={styles.btnSend} type="submit">Оформить заказ</button>
    </form>
  </div>
  );
};