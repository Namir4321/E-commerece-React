import axios from "axios";

const BASE_URL=`https://e-commerce-szxe.onrender.com/api/`;

export const publicRequest=axios.create({
    baseURL:BASE_URL
})
export const userRequest=axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
})