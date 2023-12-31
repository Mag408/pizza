import React from "react";
import { useDispatch } from "react-redux";
import { onChangeSort } from "../redux/filter/slice";

type SortProps = {
  SortValue: SortList;
};

export type SortList = {
  name: string;
  sortProperty: "rating" | "title" | "price";
  sortOrder: "desc" | "asc";
};

export const sortList: SortList[] = [
  { name: "популярности", sortProperty: "rating", sortOrder: "desc" },
  { name: "цена по убываню", sortProperty: "price", sortOrder: "desc" },
  { name: "цена по возрастанию", sortProperty: "price", sortOrder: "asc" },
  { name: "алфавиту", sortProperty: "title", sortOrder: "asc" },
];

const Sort: React.FC<SortProps> = React.memo(({ SortValue }) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handlClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handlClickOutside);

    return () => document.body.removeEventListener("click", handlClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={!open ? "svg-rotate" : ""}
          onClick={() => setOpen(!open)}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          ></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{SortValue.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  dispatch(onChangeSort(obj));
                }}
                className={obj.name === SortValue.name ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
