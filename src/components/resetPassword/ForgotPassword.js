import React, { useState } from 'react'
import "./ResetPassword.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {userforgot} from "../../redux/apiCartRedux"

export const ForgotPassword = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
const [username,setuserName]=useState("")
    const handleClick=(e)=>{
e.preventDefault();
console.log(username)
dispatch(userforgot({email:username}))
navigate("/login")
    }
  return (
    <div className='container-fluid main-register-container'>
    <div className='main-content'> 
    <div className="wrapper" style={{textAlignLast:"start"}}>
            <form className="form-right" onSubmit={handleClick}>
                <h2 className="text-uppercase">Forgot Password</h2>
               
                {/* <div className='row'>  */}
                <div className="  mb-3">
                    <label>Your Email</label>
                    <input type="email" className="input-field" name="email" required style={{width:"100%"}}
                    onChange={(e)=>setuserName(e.target.value)}
                    />
                </div>
              
                    <button type="submit"  className="register-btn"  onClick={handleClick} >Reset</button>
              
            </form>
        </div>
    </div>
        </div>
   
  )
}
