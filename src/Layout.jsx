import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import BackToTopButton from './components/Backtotbutton'
import WhatsAppButton from './components/Whatsappbutton'


export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <BackToTopButton/>
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}