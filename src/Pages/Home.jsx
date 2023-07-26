import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock/index";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import Pagination from "../Components/Pagination";
import { SearchContext } from "../App";

function Home() {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isPizzasLoading, setIsPizzasLoading] = React.useState(true);
  const [categoriId, setcategoriId] = React.useState(0);
  const { searcValue } = React.useContext(SearchContext);
  const [SortId, setSortId] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsPizzasLoading(true);
    fetch(
      `https://64199f38c152063412c74678.mockapi.io/cart?page=${currentPage}&limit=4  &${
        categoriId > 0 ? `category=${categoriId}` : ""
      }&sortBy=${SortId.sortProperty}&order=${SortId.sortOrder}&search=${
        searcValue ? searcValue : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsPizzasLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriId, SortId, searcValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriId}
          onClickCategori={(i) => {
            setcategoriId(i);
          }}
        />
        <Sort
          value={SortId}
          onChangeSort={(i) => {
            setSortId(i);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzasLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(pageNumber) => setCurrentPage(pageNumber)} />
    </div>
  );
}

export default Home;
