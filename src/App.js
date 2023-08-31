import "./App.css";
import Home from "./Pages/Home";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductList } from "./Pages/ProductList";
import { SingleProductPage } from "./Pages/SingleProductPage";
import { Register } from "./components/Authen/Register";
import { Login } from "./components/Authen/Login";
import { CartPage } from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";
import { Pay } from "./components/Stripe/Pay";
import { useSelector } from "react-redux";
import {Routes,Route,Redirect,Navigate} from "react-router-dom";
import { useState } from "react";
import { Sucess } from "./components/Stripe/Sucess";
import { OrderPage} from "./Pages/OrderPage";
import { UserprofileComp } from "./components/Profile/UserprofileComp";
import { AccountPage } from "./Pages/AccountPage";
import { ResetPassword } from "./components/resetPassword/ResetPassword";
import { ForgotPassword } from "./components/resetPassword/ForgotPassword";
import { WishListPage } from "./Pages/WishListPage";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  const user=useSelector(state=>state.user.currentUser)
console.log(user)
  return(
    <>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/products"  element={<ProductList/>}/>

<Route path="/products/:Category"  element={<ProductList/>}/>
    <Route path="/product/:id"  element={<SingleProductPage/>}/>
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/pay" element={user ?<PaymentPage/>:<Login/>} />
    <Route path="/success" element={user ?<Sucess/>:<Login/>} />

    
    <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
    <Route path="/register" element={<Register />} />
  <Route path="/orders/"element={user ?<OrderPage/>:<Login/>}/>
  <Route path={`/account/${user}`}element={user ?<AccountPage/>:<Login/>}/>
  <Route path="/resetpassword/:userId/:token" element={<ResetPassword/>} />
  <Route path="/forgotpassword" element={<ForgotPassword/>} />
  <Route path="/wishlist"element={<WishListPage/>}/>
  <Route path="/error" element={<ErrorPage/>} />
        <Route path="*" element={<Navigate to="/error" />} />



    </Routes>
    </>
  )
}
export default App;


