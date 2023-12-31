import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { FetchPizzasArgs, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { PageValue, CategoryId, SortValue, SearchValue } = params;

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
