import { cartstart, cartSucess, cartFailure } from "./cartRedux";
import { publicRequest } from "../requestMethod";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addtoCartApi = createAsyncThunk(
  "cart/addtocart",
  async ({ productadd, userId, productId }) => {
    const product = [productadd];
    const productone = { product, userId, productId };
    try {
      if (userId !== "") {
        const res = await publicRequest.post("/cart/add", productone);
        const products = res.data.product.flatMap((item) => item);
        console.log(products);
        return products;
      } else {
        console.log("login first");
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const showcart = createAsyncThunk("cart/show", async (userId) => {
  try {
    console.log(userId)
    const res = await publicRequest.get(`cart/${userId}`);
    const products = res.data.flatMap((item) => item.product);

    return products;
  } catch (err) {
    console.log(err);
  }
});

export const UpdateCart = createAsyncThunk(
  "cart/update",
  async ({ userId, CartId, newQuantity, type, total }) => {
    let data = { CartId, newQuantity, type, total };
    try {
      const res = await publicRequest.put(`cart/update/${userId}`, data);

      const products = res.data.product.flatMap((item) => item);

      return products;
    } catch (err) {
      console.log(err);
    }
  }
);
export const deleteCart = createAsyncThunk(
  "cart/deleteOne",
  async ({ userId, CartId, total }) => {
    try {
      const res = await publicRequest.delete(`cart/${userId}`, {
        data: { CartId, total },
      });

      const products = res.data.product.flatMap((item) => item);
      console.log(products);
      return products;
    } catch (err) {
      console.log(err);
    }
  }
);
export const handleClear = createAsyncThunk(
  "cart/deleteall",
  async ({ userId }) => {
    try {
      console.log(userId);
      const res = await publicRequest.delete(`/cart/clear/${userId}`);
      const products = res.data.product.flatMap((item) => item);
      console.log(products);
      return products;
    } catch (err) {}
  }
);
export const postOrder = createAsyncThunk(
  "order/post",
  async ({ productone, customerdetails, userId }) => {
    console.log({productone,customerdetails,userId})
    try {
      const products = { productone, customerdetails, userId };
      const res = await publicRequest.post("orders/", products);
      console.log(res.data);
      const product = res.data.customerorder.flatMap((item) => item);
      return product;
    } catch (err) {
      console.log(err);
    }
  }
);
export const showorder = createAsyncThunk("order/show", async (userId) => {
  try {
    console.log(userId)
    const res = await publicRequest.get(`orders/search/${userId}`);
    console.log(res.data)
    const products = res.data.flatMap((item) => item.customerorder);
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  }
});
export const userprofile = createAsyncThunk("userprofile/show", async ({userId,accesstokener,email}) => {
  try {
    const res = await publicRequest.post(`mail/send`,{userId,accesstokener,email});
    console.log(res.data)
  } catch (err) {
    console.log(err);
  }
});
export const userforgot = createAsyncThunk("userprofile/show", async ({userId,accesstokener,email}) => {
  try {
    const res = await publicRequest.post(`mail/forgot`,{userId,accesstokener,email});
    console.log(res.data)
  } catch (err) {
    console.log(err);
  }
});
export const addtoWishlistApi = createAsyncThunk(
  "wishlist/addtowish",
  async ({ productadd, userId, productId }) => {
    const product = [productadd];
    const productone = { product, userId, productId };
    try {
      if (userId !== "") {
        const res = await publicRequest.post("/wish/add", productone);
        const products = res.data.product.flatMap((item) => item);
        console.log(products);
        return products;
      } else {
        console.log("login first");
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteWish = createAsyncThunk(
  "wish/deleteOne",
  async ({ userId, WishId }) => {
    try {
      const res = await publicRequest.delete(`/wish/${userId}`, {
        data: { WishId},
      });

      const products = res.data.product.flatMap((item) => item);
      console.log(products);
      return products;
    } catch (err) {
      console.log(err);
    }
  }
);
export const handleClearWish = createAsyncThunk(
  "wish/deleteall",
  async ({ userId }) => {
    try {
      console.log(userId);
      const res = await publicRequest.delete(`/wish/clear/${userId}`);
      const products = res.data.product.flatMap((item) => item);
      console.log(products);
      return products;
    } catch (err) {}
  }
);
export const showwish = createAsyncThunk("wish/show", async (userId) => {
  try {
    console.log(userId)
    const res = await publicRequest.get(`wish/${userId}`);
    const products = res.data.flatMap((item) => item.product);
    console.log(res.data)
    return products;
  } catch (err) {
    console.log(err);
  }
});