import { loginuser } from "./apiCall";
import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:"",
        isFetching:false,
        error:false,
        isLoggedIn:false,
        accesstoken:"",
    },
    reducers:{
        logoutuser: (state) => {
            localStorage.removeItem("user");
            return{
                currentUser:"",
                isFetching:false,
                error:false,
                isLoggedIn:false,
                accesstoken:"",  
            }
        }
    },
extraReducers: {
    [loginuser.pending]: (state) => {
        state.isFetching=true;
     state.isLoggedIn=false; 
},
[loginuser.fulfilled]: (state, action) => {
    state.isFetching=false;
    state.currentUser=action.payload.user._id;
    state.isLoggedIn=true;
    state.accesstoken=action.payload.accesstoken;
    state.userinfo=action.payload.user;
},
[loginuser.rejected]:(state)=> {
    state.isFetching=false;
    state.error=true;
    state.isLoggedIn=false;
},
}
});
export const {userstart,userSucess, userFailure,logoutuser}=userSlice.actions;
export default userSlice.reducer;