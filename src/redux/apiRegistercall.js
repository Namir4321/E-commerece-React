import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethod";
import { registerStart,registerSuccess,registerFailure } from "./registerRedux";

export const register=async(dispatch,register)=>{

    dispatch(registerStart());
    console.log(register)
    try{
const res=await publicRequest.post("auth/register",register)
console.log(res.data)
dispatch(registerSuccess(res.data))

}catch(err){
    dispatch(registerFailure)
        console.log(err)
    }
}