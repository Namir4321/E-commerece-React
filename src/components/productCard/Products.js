 import { Product } from "./Product";
import {popularProducts} from '../../data';
import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "@material-ui/icons";
export const Products = (  {cat,filters,sort} ) => {
  const [products,setproducts]=useState([]);
const [filteredProducts,setFilteredProducts]=useState([])


useEffect(()=>{
  const getProducts=async()=>{
    try{
      
      const res = await axios.get(cat
        ? `http://localhost:8080/api/products/search/all/product?categories[]=${cat}`
        : "http://localhost:8080/api/products/search/all/product"
        );
        
        setproducts(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getProducts();
  },[cat])
  
  console.log(filters)
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

 console.log(filteredProducts)

 useEffect(() => {
  if (sort === "Newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "Price(High-Low)") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);



  return (
   <>
   <div className="container-fluid">
    <div className="row container">
    {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 9)
            .map((item) => <Product item={item} key={item.id} />)}

      
    </div>
   </div>
   </>
  )
}
