import './Categoryitem.css';
import { Link } from "react-router-dom";

import { categorylist } from './Category';
export const CategoryItem = (items) => {
  return (
  <>
  {
    categorylist.map(item=>(
 <div className='col-md-12 col-lg-4 ' key={item.id}>
  <Link to={`/products/${item.Category}`}>
<div className='category-card' key={item.id}>
        <img src={item.img}className='image-cat'/>
        <div className='Info category-text'>
        <div className='title'>{item.title}</div>
        <button className='btn-custom'>SHOP NOW</button>
        </div>
         </div>
         </Link>
 </div>     
        
    ))
  }
 
    </>
  )
}
