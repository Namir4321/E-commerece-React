import './Register.css'
import { useState, } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { register } from '../../redux/apiRegistercall'
import { Link, useNavigate } from "react-router-dom";
export const Register = () => {
const[name,setname]=useState("");
const[last,setlast]=useState("");
const[username,setusername]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[currentpassword,setcurrentpassword]=useState("");
const dispatch = useDispatch();
const navigate=useNavigate();
// console.log(name,last,email,username,password,currentpassword)
const clickhandler=(e)=>{
e.preventDefault();
register(dispatch,{username:username,email:email,password:password})
navigate("/login")
}
return (
    <div className='container-fluid main-register-container'>
<div className='main-content'> 
<div className="wrapper" style={{textAlignLast:"start"}}>
        <form className="form-right">
            <h2 className="text-uppercase">Registration form</h2>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>First Name</label>
                    <input type="text" name="first_name" id="first_name" className="input-field" onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" className="input-field" onChange={(e)=>setlast(e.target.value)}/>
                </div>
            </div>
            <div className='row'> 
            <div className=" col-sm-6 mb-3">
            <label>Username</label>
                    <input type="text" name="user_name" id="username" className="input-field" onChange={(e)=>setusername(e.target.value)}/>           
                     </div>
            <div className=" col-sm-6 mb-3">
                <label>Your Email</label>
                <input type="email" className="input-field" name="email" required onChange={(e)=>setemail(e.target.value)}/>
            </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>Password</label>
                    <input type="password" name="password" id="pwd" className="input-field" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Current Password</label>
                    <input type="password" name="currentpassword" id="cpwd" className="input-field"onChange={(e)=>setcurrentpassword(e.target.value)}/>
                </div>
            </div>
            <div className="mb-3">
                <label className="option">I agree to the <a href="#">Terms and Conditions</a>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                <button type="submit" value="Register" className="register-btn" name="register" onClick={clickhandler}>Create</button>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}
