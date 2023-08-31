import { createSlice } from "@reduxjs/toolkit";
import { postOrder,showorder } from "./apiCartRedux";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderdetails: "",
    products: "",
    isError: false,
    isFetching: false,
  },
  reducers: {},
  extraReducers: {
    [postOrder.pending]: (state) => {
        state.orderdetails="";
        state.products="";
        state.isError= false;
        state.isFetching= true;
    },
    [postOrder.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.orderdetails=action.payload;
        state.products=action.payload.products;
        state.isError= false;
        state.isFetching= false;
    },
    [postOrder.rejected]: (state) => {
        state.orderdetails="";
        state.products="";
        state.isError= true;
        state.isFetching= false;
    },
    [showorder.pending]: (state) => {
        state.orderdetails="";
        state.products="";
        state.isError= false;
        state.isFetching= true;
    },
    [showorder.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.orderdetails=action.payload;
        state.products="";
        state.isError= false;
        state.isFetching= false;
    },
    [showorder.rejected]: (state) => {
        state.orderdetails="";
        state.products="";
        state.isError= true;
        state.isFetching= false;
    },
  },
});

export const { orderstart,orderSucess, orderFailure, } = orderSlice.actions;
export default orderSlice.reducer;
