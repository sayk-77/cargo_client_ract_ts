import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './Components/home/home';
import { Contacts } from './Components/contacts/contacts';

export const Router:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  )
}