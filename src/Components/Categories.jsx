import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { onChangeCategory } from "../redux/slices/filterSlice";

function Categories() {
  const categories = ["Все", "Мясные", "Вегатианские", "Гриль", "Острые"];
  const CategoryId = useSelector((state) => state.filter.CategoryId);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {categories.map((categoriName, index) => (
          <li
            key={index}
            onClick={() => dispatch(onChangeCategory(index))}
            className={CategoryId === index ? "active" : ""}
          >
            {categoriName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
