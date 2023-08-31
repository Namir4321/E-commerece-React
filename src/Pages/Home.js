 import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Announcment} from '../components/Navbar/Announcment'
import Slider from '../components/Slider/Slider';
import { Category } from '../components/Category/Category';
import { Products } from '../components/productCard/Products';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
const Home = () => {
   return (
   
     <div className='container-fluid '>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Category/>
        <Products/>
        <Newsletter/>
        <Footer/>
             </div>

   )
 }
 
 export default Home