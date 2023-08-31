import { AddOutlined,RemoveOutlined } from '@material-ui/icons'
import { useState,useEffect } from 'react';
import {addProduct} from "../../redux/cartRedux"
import axios from 'axios';
import { Location, useLocation,Link } from 'react-router-dom';
import { Product } from '../productCard/Product';
import { publicRequest } from '../../requestMethod';
import { useDispatch ,useSelector} from 'react-redux';
import { addtoCartApi } from '../../redux/apiCartRedux';
export const SingleProduct = () => {
const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const userId=useSelector(state=>state.user.currentUser)
  console.log(userId)
  const[product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1);
  const [color,setColor]=useState("");
  const [size,setsize]=useState("");  
  const dispatch=useDispatch()
  const handleQuantity=(type,e)=>{
    e.preventDefault();
if(type==="dec"){
  quantity>1&&setQuantity(quantity-1)
}else{
  setQuantity(quantity+1)
}
  }

 
console.log(productId)
  useEffect(()=>{
      const getProducts=async()=>{
        try{
          const res = await publicRequest.get(`products/searchProduct/${productId}`)
           setProduct(res.data)
          }catch(err){
            console.log(err)
          }
        };
        getProducts();
      },[productId])

      const handleClick = () => {
        const total=quantity*product.price;
        const productadd={...product,productId, quantity, color, size,userId,total}
        // dispatch(
        //   addProduct({ ...product, quantity, color, size })
        //   );
        if(userId){
          dispatch(addtoCartApi({productadd,userId,productId}))
        }

//         const productadd={ ...product, quantity, color, size ,userId }
// if(userId){
//   dispatch(addProduct({ ...product,usenorId }))
//   // getaddcart({...productsadd,dispatch,userId})
//   }        
//   else{
//     alert("Login First")
//   }
      };
      

  return (
    <div className='container-fluid'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 '>
                    <img src={product.image} alt=''className='img-fluid'/>
                </div>
                <div className='col-lg-6 m-0 p-0'>
              <span className='d-none'>{product.id}</span>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                <h2 style={{textAlignLast:"start",fontWeight:"100",padding:"5px"}}>${product.price}</h2>
                <div className='row d-flex container-fluid'>
                   <div className='col-6 container-fluid'>
                   <p style={{textAlignLast:"start",display:"flex"}}>color:
                   {product.color?.map((c)=>(
                  
                  <span onClick={(e)=>{e.preventDefault(); setColor(c);}} key={c} style={{borderRadius:"50px",key:`${c}`,backgroundColor:`${c}`,height:"20px",width:"20px",margin:"2px",border:"solid 1px black"}}></span>
                  ))}
                   </p>
                   </div>
<div className='col-6'style={{textAlignLast:"start"}}>
<div className="dropdown">
  <button className=" bg-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"style={{border:"none"}}>
  size: {size}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  {product.size?.map((s)=>(
    <li key={s}><a  className="dropdown-item" onClick={(e) => { e.preventDefault(); setsize(s); }} href="#">{s}</a></li>
    ))}
      </ul>
</div>

    </div>
    <div className='row d-flex'>
        <div className='col-6'>
        <div className='container ' >

   <div className="input-group "  style={{width:"125px"}}>
 <button className="  text-end" style={{borderRadius:"0px",backgroundColor:"transparent",border:"0px"}}><RemoveOutlined  onClick={(e)=>handleQuantity("dec",e)}/> </button>
 <input type="number" className="form-control border-radius-none w-25"  placeholder={quantity} style={{border:"1px solid teal",borderRadius:"10px"}}/>
<button className="  text-end" style={{borderRadius:"0px",backgroundColor:"transparent",border:"0px"}}> <AddOutlined  onClick={(e)=>handleQuantity("inc",e)}/></button>
       </div>

 
   </div>
        </div>
        <div className='col-6'>
            <div className='container-fluid'>
{userId?<button className='' style={{borderRadius:"0px",height:"40px" ,width:"100%", backgroundColor:"white",border:"2px solid teal"}} onClick={(e)=>{handleClick(product.id)}}>Add to Cart</button>:
              <Link to="/login" style={{textDecoration:"none",color:"black"}}>
            <button className='' style={{borderRadius:"0px",height:"40px" ,width:"100%", backgroundColor:"white",border:"2px solid teal"}} onClick={(e)=>{handleClick(product.id)}}>
              Login
              </button>
              </Link>

}

            </div>
        </div>

                
                 </div>                    

                </div>
                </div>
                 </div>

                
        </div>

    </div>
  )
}






