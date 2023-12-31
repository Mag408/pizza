import { RootState } from "../store";

export const selectSort = (state: RootState) => state.filter.SortValue;
export const selectFilter = (state: RootState) => state.filter;
