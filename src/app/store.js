import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//Global Store Reducer
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
