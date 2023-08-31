import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  size: number;
  type: string;
};

interface CartSliceState {
  totalPrice: number;
  itemsCount: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  itemsCount: 0,
  items: [],
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

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, reduceItem, removeItem, clearItems } =
  counterSlice.actions;

export default counterSlice.reducer;
