import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../Components/Categories";
import Sort, { sortList } from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock/index";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import Pagination from "../Components/Pagination";
import filterSlice, {
  selectFilter,
  setFilter,
} from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzasSlice";
import { useAppDispatch } from "../redux/store";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const { CategoryId, SortValue, SearchValue, PageValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectPizza);

  const getPizzas = async () => {
    dispatch(
      fetchPizzas({
        PageValue,
        CategoryId,
        SortValue,
        SearchValue,
      })
    );
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      const SortValue = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilter({
          ...params,
          //@ts-ignore
          SortValue,
        })
      );

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    const queryString = qs.stringify({
      CategoryId,
      sortProperty: SortValue.sortProperty,
      PageValue,
    });

    navigate(`?${queryString}`);
  }, [CategoryId, SortValue, PageValue]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [CategoryId, SortValue, SearchValue, PageValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Ошибка</h2>
          <p>
            К сожелению по вашему запросу ничего не найдено, поробуйте повторить
            попытку по позже{" "}
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
