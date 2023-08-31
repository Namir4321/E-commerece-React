import React from 'react'
import { Order } from '../components/Orders/Order'
import Navbar from '../components/Navbar/Navbar'
import { Announcment } from '../components/Navbar/Announcment'
import { Newsletter } from '../components/Newsletter/Newsletter'
import { Footer } from '../components/Footer/Footer'

export const OrderPage = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Order/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
