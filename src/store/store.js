
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../Api/productApi";
import { blogApi } from "../Api/blogApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, blogApi.middleware]),
});
