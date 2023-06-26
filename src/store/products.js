import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
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
  },
});

export const { setProducts, setFilteredProducts } = product.actions;
export default product.reducer;
