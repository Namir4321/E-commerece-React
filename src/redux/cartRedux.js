import { createSlice } from "@reduxjs/toolkit";
import { showcart,deleteCart,UpdateCart,addtoCartApi,handleClear } from "./apiCartRedux";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: "",
    quantity: 0,
    total: 0,
    isError: false,
    isFetching: false,
  },
 
  reducers: { 
    logoutcart: (state, ) => {
      localStorage.removeItem("cart");
      state.products = "";
      state.quantity = 0;
      state.total = 0;
    },
   },
  extraReducers: {
    [showcart.pending]: (state) => {
      state.products = "";
      state.quantity = 0;
      state.total = 0;
      state.isFetching = true;
      state.isError = false;
    },
    [showcart.fulfilled]: (state, action) => {
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
console.log(total)
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [showcart.rejected]: (state) => {
      state.isError = true;
    },
    [UpdateCart.pending]: (state) => {
      console.log('update pending')
    },
    [UpdateCart.fulfilled]: (state,action) => {
      console.log(action.payload)
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
console.log(total)
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [UpdateCart.rejected]: (state) => {
      state.isError=true;
    },
    [deleteCart.pending]: (state) => {
      console.log('update pending')
    },
    [deleteCart.fulfilled]: (state,action) => {
      console.log(action.payload)
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
console.log(total)
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [deleteCart.rejected]: (state) => {
      state.isError=true;
    },
    [addtoCartApi.pending]: (state) => {
      console.log('update pending')
    },
    [addtoCartApi.fulfilled]: (state,action) => {
      console.log(action.payload)
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [addtoCartApi.rejected]: (state) => {
      state.isError=true;
    },
    [handleClear.pending]: (state) => {
      console.log("deleted")
    },
    [handleClear.fulfilled]: (state, action) => {
      state.products = "";
      state.quantity = 0;
      state.total = 0;
      state.isFetching = true;
      state.isError = false;
    },
    [handleClear.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { cartstart, cartSucess, cartFailure,logoutcart } = cartSlice.actions;
export default cartSlice.reducer;
