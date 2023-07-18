import React from "react";

function Categories() {
  const [activIndex, setActivIndex] = React.useState(0);

  const categories = ["Все", "Мясные", "Вегатианские", "Гриль", "Острые"];

  function onClickCategori(index) {
    setActivIndex(index);
  }

  return (
    <div class="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategori(index)}
            className={activIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
