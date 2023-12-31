import React from "react";

import { useDispatch } from "react-redux";
import { onChangeCategory } from "../redux/filter/slice";

type CategoryProps = {
  CategoryId: number;
};

const Categories: React.FC<CategoryProps> = React.memo(({ CategoryId }) => {
  const categories = ["Все", "Мясные", "Вегатианские", "Гриль", "Острые"];

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
});
export default Categories;
