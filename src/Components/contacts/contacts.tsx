import React from 'react'
import { Header } from '../header/Header'
// @ts-ignore
import styles from './contacts.module.css'
import { Info } from './info'
import { MapContact } from './map'

export const Contacts:React.FC = () => {
  return (
    <section className={styles.contacts}>
        <Header />
        <h1 className={styles.contacts_title}>
            Свяжитесь с <span>QuickGo</span>
        </h1>
        <Info />
        <MapContact />
    </section>
  )
}