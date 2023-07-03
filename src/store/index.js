import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";
import category from "./category";
import products from "./products";
import auth from "./auth";
const store = configureStore({
  reducer: {
    basket,
    products,
    category,
    auth
  },
});
export default store;
