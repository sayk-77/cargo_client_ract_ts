import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './Components/home/home';
import { Contacts } from './Components/contacts/contacts';
import { Question } from './Components/question/question';
import { Authorization } from './Components/authorization/authorization';
import { Registration } from './Components/registration/registration';
import { About } from './Components/about/about';

export const Router:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/about' element={<About />} />
        <Route path='/ask-question' element={<Question />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}