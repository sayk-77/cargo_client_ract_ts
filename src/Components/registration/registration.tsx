import React, { useState } from 'react'
//@ts-ignore
import styles from './registration.module.css'
import { Link, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import axios from 'axios'
// @ts-ignore
import sprite from '../../sprite.svg'

const isValidName = (name: any) => /^[a-zA-Zа-яА-Я]+$/.test(name);
const isValidPassword = (password: string) => /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(password);

export const Registration:React.FC = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [showPassword, setPasswordShow] = useState<boolean>(false)

    const nav = useNavigate()

    const registration = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault()

      if (!isValidName(firstName) && !isValidName(lastName)) {
        setError("Имя или фамилия содержат не допустимые символы")
        return
      }
      if (!isValidPassword(password)) {
        setError('Пароль должен содержать минимум одну цифру и состоять только из букв латинского алфавита.');
        return;
      }

      setError("")

      const regData = {
        "firstName": firstName,
        "lastName": lastName,
        "address": address,
        "email": email,
        "phoneNumber": phone,
        "password": password
      }

      try {
        await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/client/add`, regData)
        nav("/authorization")
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.error);
        }
      }
    }




    return (
      <section className={styles.login_form}>
        <div className={styles.main}>
          <Link className={styles.logo} to="/">QuickGo</Link>
          <form onSubmit={registration}>
            <label className={styles.label} htmlFor="firstname">Имя:</label>
            <input
              className={styles.input}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Введите ваше имя"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />
            <label className={styles.label} htmlFor="lastname">Фамилия:</label>
            <input
              className={styles.input}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Введите вашу фамилию"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            />
            <label className={styles.label} htmlFor="address">Адрес:</label>
            <input
              className={styles.input}
              type="text"
              id="address"
              name="address"
              placeholder="Введите ваш адрес"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
            />
            <label className={styles.label} htmlFor="email">Почта:</label>
            <input
              className={styles.input}
              type="text"
              id="email"
              name="email"
              placeholder="Введите вашу почту"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <label className={styles.label} htmlFor="phone">Номер телефона:</label>
            <InputMask
              className={styles.input}
              mask="+7 (999) 999 99 99"
              maskChar=" "
              placeholder="+7 (---) --- -- --"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />
            <label className={styles.label} htmlFor="password">Пароль:</label>
            <div className={styles.password_cont}>
              <input
                className={styles.inputPassword}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Введите ваш пароль"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <div className={styles.showPassword} onClick={() => setPasswordShow(!showPassword)}>
                <svg height={20} width={30}><use xlinkHref={showPassword? sprite+'#eye_close' : sprite+'#eye_open'}></use></svg> 
              </div>       
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.wrap}>
              <button className={styles.send} type="submit">Регистрация</button>
            </div>
          </form>

          <div className={styles.create_profile}>
              <p>Уже были у нас?</p>
              <Link to="/authorization" style={{ textDecoration: 'none' }}> Вход</Link>
          </div>
        </div>
      </section>
    )
}