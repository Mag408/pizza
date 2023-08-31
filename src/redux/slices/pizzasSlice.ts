import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { type } from "os";
import { CartItem } from "./cartSlice";

type Sort = {
  name: string;
  sortProperty: string;
  sortOrder: string;
};

type FetchPizzasArgs = {
  PageValue: number;
  CategoryId: number;
  SortValue: Sort;
  SearchValue: string;
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { PageValue, CategoryId, SortValue, SearchValue } = params;
    console.log(SortValue);
    const { data } = await axios.get<Pizza[]>(
      `https://64199f38c152063412c74678.mockapi.io/cart?page=${PageValue}&limit=4  &${
        CategoryId > 0 ? `category=${CategoryId}` : ""
      }&sortBy=${SortValue.sortProperty}&order=${SortValue.sortOrder}&search=${
        SearchValue ? SearchValue : ""
      }`
    );
    return data as Pizza[];
  }
);

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

interface PizzaSleceState {
  items: Pizza[];
  status: "loading" | "success" | "error";
}

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
export const selectPizza = (state: RootState) => state.pizzas;

export const { setItems } = pizzzasSlice.actions;

export default pizzzasSlice.reducer;
