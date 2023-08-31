import {Link,NavLink} from 'react-router-dom'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import './Product.css';
import { addtoCartApi ,addtoWishlistApi} from '../../redux/apiCartRedux';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
export const Product = ({item}) => {
  const [product,setProduct]=useState();
  const userId=useSelector(state=>state.user.currentUser)
  const defaultColor = item.color[0];
  const defaultSize = item.size[0];
  const dispatch=useDispatch();
  
  const total=item.price;
  
  const handleAddToCart = () => {
    const productToAdd = {
      ...item,
      color: defaultColor,
      size: defaultSize,
      productId: item._id,
      quantity: 1,
      total: item.price*1, 
      userId: userId,
    };
    
    const productId=item._id
  console.log({ productadd: productToAdd,productId:productId, userId: userId })
  
  if(userId){
    dispatch(addtoCartApi({ productadd: productToAdd, userId: userId }));
  }
  };
  const handleAddToWishlist = () => {
    const productToAdd = {
      ...item,
      color: defaultColor,
      size: defaultSize,
      productId: item._id,
      quantity: 1,
      userId: userId,
    };
    
    const productId=item._id
  console.log({ productadd: productToAdd,productId:productId, userId: userId })
  
  if(userId){
    dispatch(addtoWishlistApi({ productadd: productToAdd, userId: userId }));
  }
  };
  return (
<>
<div className="col-lg-3 col-sm-12 col-md-6  ProductContainers"key={item._id} >

  <div className="Circle" >
{
  <img src={item.image} className=" display-block Imagecard position-absolute img-thumbnail h-100 w-100 img-fluid"/>
}
  </div>
<div className="infoContprod">
  <div className="Icon" onClick={handleAddToCart}>
        <ShoppingCartOutlined/>
        </div>
  <div className="Icon" >
    <Link to={`/product/${item._id}`} style={{color:"black",textDecoration:"none"}}>
        <SearchOutlined/>
</Link>
  </div>
  <div className="Icon" onClick={handleAddToWishlist}>
        <FavoriteBorderOutlined/>
        </div>
    </div>
    </div>

</>
  )
}
