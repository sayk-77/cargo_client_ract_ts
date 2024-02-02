import React from 'react'
// @ts-ignore
import styles from './map.module.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MapContact:React.FC = () => {
    const defaultState = {
        center: [58.555774, 31.259360],
        zoom: 13,
    }

  return (
    <section className={styles.map}>
        <h2>Мы находимся</h2>
        <p>Сырковское шоссе, 10, Великий Новгород</p>
        <YMaps>
            <div className={styles.map_container}>
                <Map defaultState={defaultState} width="100%" height="450px" >
                    <Placemark geometry={[58.555774, 31.259360]} color="green" options={{iconColor: "#0BD366"}}/>
                </Map>
            </div>
        </YMaps>
    </section>
  )
}