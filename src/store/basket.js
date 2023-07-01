import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.qty++;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.qty--;
      }
      if (existingProduct.qty === 0) {
        state.items = state.items.filter((p) => p.id !== product.id);
      }
    },
    deleteItem(state, action) {
      const product = action.payload;
      state.items = state.items.filter((p) => p.id !== product.id);
    },
  },
});

export const { addItem, removeItem, deleteItem } = basket.actions;
export default basket.reducer;
