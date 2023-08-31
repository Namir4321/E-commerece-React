import React from "react";
import "./EditUser.css";
import { useNavigate } from "react-router";
import { Publish } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { userprofile } from "../../redux/apiCartRedux";
import { deleteaccount } from "../../redux/apiCall";
import { logoutuser } from "../../redux/userRedux";
import { logoutcart } from "../../redux/cartRedux";
import {logoutwish} from "../../redux/WishRedux";
export const EditUser = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userId=useSelector(state=>state.user.currentUser)
  const user=useSelector((state)=>state.user.userinfo)
  const accesstokener=useSelector((state)=>state.user.accesstoken)
  console.log(user)
const handleClick=()=>{
  console.log("working")
  const userId=user._id;
  const email=user.email
  console.log(email)
  dispatch(userprofile({userId,accesstokener,email}))
  
}
const handleDelete=()=>{
  console.log("working")
  console.log(userId)
  dispatch(deleteaccount({userId}))
  dispatch(logoutuser())
  dispatch(logoutcart())
  dispatch(logoutwish())
  navigate("/")
}
  return (
   <div className="container-fluid text-center"> 
  <div className="row">
    <div className="col-6">
      <button className="btnprod"
style={{
  borderRadius: "0px",
  backgroundColor: "white",
  border: "2px solid teal",
}} onClick={handleClick} >Change Password</button>
    </div>
    <div className="col-6 text-end">
      <button className="btnprod"
style={{
  borderRadius: "0px",
  backgroundColor: "white",
  border: "2px solid teal",
}}
onClick={handleDelete}
>Delete Account</button>
    </div>

  </div>
   </div>
  );
};
