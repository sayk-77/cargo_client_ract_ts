import React, { useState } from 'react'
//@ts-ignore
import styles from './authorization.module.css'
import { Link } from 'react-router-dom'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const Authorization:React.FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const loginData = {
            email: email,
            password: password
        }
        
        try {
            const response: AxiosResponse<{token: string}>  = await axios.post("http://192.168.0.105:5000/client/login", loginData)

            const token: string = await response.data['token']
            localStorage.setItem('token', token)

        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response?.status === 401) {
                    console.log('Неверный логин или пароль')
                } else {
                    console.log('Ошибка на сервере:', err.message)
                }
            } 
        }
    }

    return (
        <section className={styles.login_form}>
        <div className={styles.main}>
            <Link className={styles.logo} to="/">QuickGo</Link>
            <form onSubmit={login}>
                <label className={styles.label} htmlFor="first">Почта:</label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите вашу почту"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className={styles.label} htmlFor="password">Пароль:</label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Введите ваш пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className={styles.wrap}>
                    <button className={styles.send} type="submit">Войти</button>
                </div>
            </form>
            <div className={styles.create_profile}>
                <p>Первый раз у нас?</p>
                <Link to="/registration" style={{ textDecoration: 'none' }}> Регистрация</Link>
            </div>
        </div>
        </section>
    )
}