import { useState } from "react"
import { Footer } from "../components/Footer/Footer"
import { Announcment } from "../components/Navbar/Announcment"
import Navbar from "../components/Navbar/Navbar"
import { Newsletter } from "../components/Newsletter/Newsletter"
import { Filter } from "../components/ProductFilter/Filter"
import { Products } from "../components/productCard/Products"
import { useLocation } from "react-router-dom";

export const ProductList = ({filter}) => {
 
  return (
    <div className="container-fluid">
<Announcment/>
        <Navbar/>
<Filter/>
<Newsletter/>
<Footer/>
    </div>
  )
}
