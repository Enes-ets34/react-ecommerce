import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    searchKey: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map((p) => {
        return {
          ...p,
          qty: 0,
        };
      });
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (p) => p.categoryId === action.payload
      );
    },
    setSearchKey: (state, action) => {
      const searchKey = action.payload;
      state.searchKey = searchKey;
    },
  },
});

export const { setProducts, setFilteredProducts, setSearchKey } =
  product.actions;
export default product.reducer;
