import React from 'react'
import { SingleProduct } from '../components/SinglePage/SingleProduct'
import {Announcment} from "../components/Navbar/Announcment";
import Navbar from "../components/Navbar/Navbar";
import {Newsletter} from "../components/Newsletter/Newsletter"
import {Footer} from "../components/Footer/Footer"
export const SingleProductPage = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <SingleProduct/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
