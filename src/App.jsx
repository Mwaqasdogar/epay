import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Coin from './components/Coin/Coin'
import Transations from './components/Transations/Transations'
import Layout from './components/Layout/Layout'
import Admin from './components/Admin/Admin'
import Setting from './components/Setting/Setting'


function App() {
 

  return (
    <>
  <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/sidebar' element={<Sidebar/>}/>

  <Route path='/Layout' element={<Layout/>}/>
  <Route path='/coin' element={<Layout><Coin/></Layout>}/>
  <Route path='/Transations' element={<Layout><Transations/></Layout>}/>
  <Route path='/admin' element={<Layout><Admin/></Layout>}/>
  <Route path='setting' element={<Layout><Setting/></Layout>}></Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App;