import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CategoryId: 0,
  SortValue: {
    name: "популярности",
    sortProperty: "rating",
    sortOrder: "desc",
  },
};

export const counterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onChangeCategory: (state, action) => {
      state.CategoryId = action.payload;
    },
    onChangeSort: (state, action) => {
      state.SortValue = action.payload;
    },
  },
});

export const { onChangeCategory, onChangeSort } = counterSlice.actions;

export default counterSlice.reducer;
