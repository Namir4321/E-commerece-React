import {createSlice} from "@reduxjs/toolkit";
const userlogoutSlice=createSlice({
    name:"logout",
    initialState:{
        currentUser:null,
        isLoggedIn:false,
    },
    reducers:{
        logoutStart:(state)=>{
             state.isLoggedIn=false;
        },
        logoutSuccess:(state,action)=>{
            localStorage.removeItem("cart");
            
            localStorage.removeItem("register");
            
            localStorage.removeItem("user");
            
            localStorage.removeItem("_persist");
            
            state.currentUser=action.payload;
            state.isLoggedIn=false;
        },
        logoutFailure:(state)=>{
            state.error=true;
            state.isLoggedIn=true;    
},
},
},);
export const {logoutFailure,logoutStart,logoutSuccess}=userlogoutSlice.actions;
export default userlogoutSlice.reducer;