export type Sort = {
  name: string;
  sortProperty: string;
  sortOrder: string;
};

export type FetchPizzasArgs = {
  PageValue: number;
  CategoryId: number;
  SortValue: Sort;
  SearchValue: string;
};

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export interface PizzaSleceState {
  items: Pizza[];
  status: "loading" | "success" | "error";
}
