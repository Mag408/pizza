import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Sort = {
  name: string;
  sortProperty: "rating" | "title" | "price";
  sortOrder: "desc" | "asc";
};

export interface FilterSliceState {
  CategoryId: number;
  SortValue: Sort;
  SearchValue: string;
  PageValue: number;
}

const initialState: FilterSliceState = {
  CategoryId: 0,
  SortValue: {
    name: "популярности",
    sortProperty: "rating",
    sortOrder: "desc",
  },
  SearchValue: "",
  PageValue: 1,
};

export const counterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onChangeCategory: (state, action: PayloadAction<number>) => {
      state.CategoryId = action.payload;
    },
    onChangeSort: (state, action: PayloadAction<Sort>) => {
      state.SortValue = action.payload;
    },
    onChangeSearch: (state, action: PayloadAction<string>) => {
      state.SearchValue = action.payload;
    },
    onChangePage: (state, action: PayloadAction<number>) => {
      state.PageValue = action.payload;
    },
    setFilter: (state, action: PayloadAction<FilterSliceState>) => {
      state.SortValue = action.payload.SortValue;
      state.PageValue = Number(action.payload.PageValue);
      state.CategoryId = Number(action.payload.CategoryId);
    },
  },
});

export const selectSort = (state: RootState) => state.filter.SortValue;
export const selectFilter = (state: RootState) => state.filter;

export const {
  onChangeCategory,
  onChangeSort,
  onChangeSearch,
  onChangePage,
  setFilter,
} = counterSlice.actions;

export default counterSlice.reducer;
