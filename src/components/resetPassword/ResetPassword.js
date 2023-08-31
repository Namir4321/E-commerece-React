import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { updatepassword } from "../../redux/apiCall";
import { logoutuser } from "../../redux/userRedux";
import "./ResetPassword.css";
export const ResetPassword = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
  const [password, setpassword] = useState("");
  const [confirm, setconfirmpassword] = useState("");
  const [message, setmessage] = useState("");
  const location=useLocation();
  const userId=location.pathname.split("/")[2];
  const token=location.pathname.split("/")[3];
  const handleData = async (e) => {
    e.preventDefault();
    if (password === confirm) {
dispatch(updatepassword({userId,token,password}));
dispatch(logoutuser());
navigate("/login")
        
    } else {
      setmessage("Passwords do not match");
    }
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
    setmessage(""); 
  };

  const handleConfirmPasswordChange = (e) => {
    setconfirmpassword(e.target.value);
    setmessage(""); 
  };
  return (
    <div className="container-fluid">
      <div className="container-fluid text-center mt-5">
        <h1>Update Account Password</h1>
      </div>
      <div className="container box mb-3">
      <div className="container-fluid text-center mt-5">
        <p>Enter a new password for shop account</p>
      </div>
      <div className=" contianer text-center mt-2 update">
        <form onSubmit={handleData}>
          <div className="mb-3">
            <input
              type="password"
              className="p-2 input-filed"
              name="Password"
              required
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className=" mb-3 ">
            <input
              type="password"
              placeholder="Confirm Password"
              name="pwd"
              id="pwd"
              className="input-field p-2"
              onChange={handleConfirmPasswordChange}
              value={confirm}
            />
            {message && <div className="message" style={{color:"red"}}>{message}</div>}
          </div>
          <button
            className="mt-2 p-2 mb-5"
            style={{
              border: "1px solid black",
              color: "white",
              background: "teal",
            }}
            onClick={handleData}
          >
            Update Password
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};
