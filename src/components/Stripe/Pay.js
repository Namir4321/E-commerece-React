import StripeCheckout from "react-stripe-checkout"
// import confirmPayment from 'stripe-element';
import {useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";
import axios  from "axios";
import { publicRequest, userRequest } from "../../requestMethod";
import {loadStripe} from '@stripe/stripe-js';
const key="pk_test_51MOn0RSCoZWqhGLghNbZGJNElj6EoHYkt03rWcPYTUpa1EUlMas5Rd2RY8Ta70ubtXaFVmchCdlqOPaXhkpYAQcO00i4y02duY";
export const Pay = () => {
const makePayment=async()=>{
const stripe=await loadStripe(key)
const products=[{
  name:"carts",
  price:32,
  quantity:2,
}]
const res=await publicRequest.post("checkout/payment",products)
const session=await res.data;

const result = await stripe.redirectToCheckout({
  sessionId: session.id,
});
if(result.error){
  console.log(result.error)
}else{
  const response = await publicRequest.post("checkout/stripe/webhook", {
    sessionId: session.id,
  });
}
}
  return (
    <>
      <div className="container-fluid">
        <button onClick={makePayment}>Pay</button>
      </div>
    </>
  );
}



