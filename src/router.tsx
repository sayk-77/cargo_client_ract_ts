import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './Components/home/home';
import { Contacts } from './Components/contacts/contacts';
import { Question } from './Components/question/question';
import { Authorization } from './Components/authorization/authorization';
import { Registration } from './Components/registration/registration';
import { About } from './Components/about/about';
import { Profile } from './Components/profile/profile';
import { Setting } from './Components/setting/setting';
import { NewOrder } from './Components/order/newOrder';
import { ProcessOrder } from './Components/order/processOrder';
import { CompletedOrder } from './Components/order/completedOrder';

export const Router:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/about' element={<About />} />
        <Route path='/ask-question' element={<Question />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/order/process' element={<ProcessOrder />} />
        <Route path='/order/completed' element={<CompletedOrder />} />
        <Route path='/order/new' element={<NewOrder />} />
      </Routes> 
    </BrowserRouter>
  )
}
