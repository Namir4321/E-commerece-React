import { publicRequest} from "../requestMethod";

import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginuser = createAsyncThunk("user/login", async (user) => {
    try {
        const res=await publicRequest.post("auth/login",user)
        console.log(res.data)
        return res.data
    } catch (err) {
      console.log(err);
    }
  });
  export const updatepassword = createAsyncThunk("user/update", async ({userId,token,password}) => {
    try {
      console.log({userId,token,password})
const info={userId,token,password}
        const res=await publicRequest.post("auth/update",info)
        console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  });

  export const resetpassword = createAsyncThunk("user/forgot", async ({email}) => {
    try {
        const res=await publicRequest.post("auth/update",email)
        console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  });
  export const deleteaccount = createAsyncThunk("user/delete", async ({userId}) => {
    try {
        const res=await publicRequest.delete(`users/${userId}`)
        console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  });