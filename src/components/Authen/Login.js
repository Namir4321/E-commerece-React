import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { withRouter,redirect,useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginuser } from '../../redux/apiCall';
export const Login = () => {
const [userName,setuserName] =useState("");
const [userpassword,setuserpassword] =useState("");
const { isFetching, error } = useSelector((state) => state.user);
const dispatch=useDispatch();
const handleClick=(e)=>{
 e.preventDefault()
 console.log(userName)
 dispatch(loginuser({email:userName,password:userpassword}))
// login(dispatch,{email:userName,password:userpassword},navigate)

}
return (
<div className='container-fluid main-register-container'>
<div className='main-content'> 
<div className="wrapper" style={{textAlignLast:"start"}}>
        <form className="form-right" onSubmit={handleClick}>
            <h2 className="text-uppercase">Sign In</h2>
           
            {/* <div className='row'>  */}
            <div className="  mb-3">
                <label>Your Email</label>
                <input type="email" className="input-field" name="email" required style={{width:"100%"}}
                onChange={(e)=>setuserName(e.target.value)}
                />
            </div>
            <div className=" mb-3">
                    <label>Password</label>
                    <input type="password" name="pwd" id="pwd" className="input-field"
                    onChange={(e)=>setuserpassword(e.target.value)}
                    />
                </div>
            {/* </div> */}
            <div className='p-1' >
                <div className='row'>
                {error && <p>Something went wrong</p>}
                </div>
                <a href='/forgotpassword'style={{color:"black"}}>DO NOT YOU REMEMBER THE PASSWORD</a><br/>
                <a href='/register'style={{color:"black"}}>CREATE ACCOUNT</a>
            </div>
                        <div className="form-field">
                        {/* <button type="submit"  className="register-btn" name="register" onClick={handleClick}>Login</button> */}

                <button type="submit"  className="register-btn"  onClick={handleClick} >Log In</button>
            </div>
        </form>
    </div>
</div>
    </div>
  )

}
