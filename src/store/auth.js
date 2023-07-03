import { createSlice } from "@reduxjs/toolkit";
import { clearItems } from "./basket";

const auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUserAction: (state, action) => {
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      clearItems();
    },
  },
});

export const { setUserAction, logout } = auth.actions;
export default auth.reducer;
