import React from 'react'
import { Route, Routes, Outlet, Link } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Login from './components/Login/Login'
import Pricing from './components/Pricing/Pricing'
import SignUp from './components/SignUp/SignUp'



const App = () => {
  return (
    <div className='bg-black text-white'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
          <Route path='about' element={<About/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='blog' element={<Blog/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App