import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: reducer,
  },
});
