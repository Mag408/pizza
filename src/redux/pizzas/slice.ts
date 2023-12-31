import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, PizzaSleceState } from "./types";
import { fetchPizzas } from "./asyncAction";

const initialState: PizzaSleceState = {
  items: [],
  status: "loading",
};

export const pizzzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = "success";
      }
    );

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setItems } = pizzzasSlice.actions;

export default pizzzasSlice.reducer;
