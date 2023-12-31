import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";
import { getCartFromLs } from "../../utils/getCartFromLS";

const cartData = getCartFromLs();
const getTotalPrice = () => {
  let sum: number = 0;
  cartData.map((obj: CartItem) => {
    sum += obj.count * obj.price;
  });
  return sum;
};
const getItemsCount = () => {
  let count: number = 0;
  cartData.map((obj: CartItem) => {
    count += obj.count;
  });
  return count;
};

const initialState: CartSliceState = {
  totalPrice: getTotalPrice(),
  itemsCount: getItemsCount(),
  items: cartData,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
        state.itemsCount++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
        state.itemsCount++;
      }
      state.totalPrice += action.payload.price;
    },
    reduceItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
      state.itemsCount--;
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.type !== action.payload.type ||
          obj.size !== action.payload.size
      );
      state.totalPrice -= action.payload.price * action.payload.count;
      state.itemsCount -= action.payload.count;
    },
    clearItems(state) {
      state.items = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, reduceItem, removeItem, clearItems } =
  counterSlice.actions;

export default counterSlice.reducer;
