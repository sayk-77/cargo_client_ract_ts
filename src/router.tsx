import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/home/home'
import { Contacts } from './Components/contacts/contacts'
import { Question } from './Components/question/question'
import { Authorization } from './Components/authorization/authorization'
import { Registration } from './Components/registration/registration'
import { About } from './Components/about/about'
import { Profile } from './Components/profile/profile'
import { CreateOrder } from './Components/createOrder/createOrder'
import { MakeOrder } from './Components/admin-dashboard/create_order/create_order'
import { Dashboard } from './Components/admin-dashboard/dashboard/dashboard'
import { Login } from './Components/admin-dashboard/login/login'
import { QuestionDetail } from './Components/admin-dashboard/questions/questionDetail'
import { Recovery } from './Components/recovery/recovery'
import { Order } from './Components/order/order'
import { Setting } from './Components/setting/setting'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/ask-question" element={<Question />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/create-order/:id" element={<MakeOrder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/create" element={<CreateOrder />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/dashboard/login" element={<Login />} />
        <Route path="/solution-quest/:id" element={<QuestionDetail />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </BrowserRouter>
  )
}
