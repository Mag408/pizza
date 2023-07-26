import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {} from "./redux/slices/filterSlice";

function Categories({ value, onClickCategori }) {
  const categories = ["Все", "Мясные", "Вегатианские", "Гриль", "Острые"];

  const filterValue = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((categoriName, index) => (
          <li
            key={index}
            onClick={() => dispatch(onClickCategori(index))}
            className={value === index ? "active" : ""}
          >
            {categoriName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
