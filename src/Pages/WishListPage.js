import React from 'react'
import { Announcment } from '../components/Navbar/Announcment'
import Navbar from "../components/Navbar/Navbar";
import {WishList} from "../components/Wishlist/WishList"
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
export const WishListPage = () => {
  return (
    <div className='container-fluid' style={{textAlign:"center"}}>
        <Announcment/>
        <Navbar/>
        <WishList/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
