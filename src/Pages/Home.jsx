import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
  const { searcValue } = React.useContext(SearchContext);

  const CategoryId = useSelector((state) => state.filter.CategoryId);
  const SortValue = useSelector((state) => state.filter.SortValue);

  console.log(SortValue);

  React.useEffect(() => {
    setIsPizzasLoading(true);
    fetch(
      `https://64199f38c152063412c74678.mockapi.io/cart?page=${currentPage}&limit=4  &${
        CategoryId > 0 ? `category=${CategoryId}` : ""
      }&sortBy=${SortValue.sortProperty}&order=${SortValue.sortOrder}&search=${
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
  }, [CategoryId, SortValue, searcValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
