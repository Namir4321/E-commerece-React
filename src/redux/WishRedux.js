import { createSlice } from "@reduxjs/toolkit";
import { showwish,handleClearWish,deleteWish,addtoWishlistApi} from "./apiCartRedux";
const cartSlice = createSlice({
  name: "wish",
  initialState: {
    products: "",
    quantity: 0,
    total: 0,
    isError: false,
    isFetching: false,
  },
 
  reducers: { 
    logoutwish: (state, ) => {
      localStorage.removeItem("wish");
      state.products = "";
      state.quantity = 0;
      state.total = 0;
    },
   },
  extraReducers: {
    [showwish.pending]: (state) => {
      state.products = "";
      state.quantity = 0;
      state.total = 0;
      state.isFetching = true;
      state.isError = false;
    },
    [showwish.fulfilled]: (state, action) => {
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
console.log(total)
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [showwish.rejected]: (state) => {
      state.isError = true;
    },
    [deleteWish.pending]: (state) => {
      console.log('update pending')
    },
    [deleteWish.fulfilled]: (state,action) => {
      console.log(action.payload)
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
console.log(total)
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [deleteWish.rejected]: (state) => {
      state.isError=true;
    },
    [addtoWishlistApi.pending]: (state) => {
      console.log('update pending')
    },
    [addtoWishlistApi.fulfilled]: (state,action) => {
      console.log(action.payload)
      const product=action.payload;
      const total = product.reduce((sum, item) => sum + item.total, 0);
      state.products=action.payload
      state.quantity=action.payload.length
      state.total=total
    },
    [addtoWishlistApi.rejected]: (state) => {
      state.isError=true;
    },
    [handleClearWish.pending]: (state) => {
      console.log("deleted")
    },
    [handleClearWish.fulfilled]: (state, action) => {
      state.products = "";
      state.quantity = 0;
      state.total = 0;
      state.isFetching = true;
      state.isError = false;
    },
    [handleClearWish.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { wishstart, wishSucess, wishFailure,logoutwish } = cartSlice.actions;
export default cartSlice.reducer;
