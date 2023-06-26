import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";
import category from "./category";
import products from "./products";
const store = configureStore({
  reducer: {
    basket,
    products,
    category,
  },
});
export default store;
