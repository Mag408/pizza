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
