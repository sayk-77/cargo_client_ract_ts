import React from 'react'
import { Header } from '../header/Header'
import { Banner } from './banner'
import { Statistic } from './statistic'
import { Advantages } from './advantages'
import { Feedback } from './feedback'

export const Home:React.FC = () => {
  return (
    <>
        <Header />
        <Banner />
        <Statistic />
        <Advantages />
        <Feedback />
    </>
  )
}
