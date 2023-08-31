import {createSlice} from "@reduxjs/toolkit";
const registerSlice=createSlice({
    name:"register",
    initialState:{
     currentUser:null,
     registered:false,
     isFetching:false,
     error:false,
    },
    reducers:{
registerStart:(state)=>{
    state.isFetching=true;
    state.registered=false;
},
registerSuccess:(state,action)=>{
    state.isFetching=false;
    state.currentUser=action.payload;
    state.registered=true;
},
registerFailure:(state)=>{
    state.isFetching=false;
    state.error=true;
    state.registered=false;
},
},
},);
export const {registerFailure,registerStart,registerSuccess}=registerSlice.actions;
export default registerSlice.reducer;