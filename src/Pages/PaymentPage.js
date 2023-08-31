import React from 'react'
import { SingleProduct } from '../components/SinglePage/SingleProduct'
import {Announcment} from "../components/Navbar/Announcment";
import Navbar from "../components/Navbar/Navbar";
import {Newsletter} from "../components/Newsletter/Newsletter"
import {Footer} from "../components/Footer/Footer"
import { Sucess } from '../components/Stripe/Sucess';
import { Pay } from '../components/Stripe/Pay';
// import Router from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div className='container-fluid' >
        <Announcment/>
    
        <Navbar/>
<Pay/>
{/* <Sucess/> */}
        <Newsletter/>
        <Footer/>
    </div>
  )
}
export default PaymentPage
