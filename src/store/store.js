
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../Api/productApi";
import { blogApi } from "../Api/blogApi";
import { cartSlice } from "../carts/cartSlice";
import { orderApi } from "../orders/orderApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      blogApi.middleware,
      orderApi.middleware
    ]),
});
