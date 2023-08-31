import React from "react";
import { useDispatch } from "react-redux";
import { onChangeSearch } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";

function Serch() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchDebonce = React.useCallback(
    debounce((str) => {
      dispatch(onChangeSearch(str));
    }, 500),
    []
  );
  const onChangeSearchState = (event) => {
    setSearchValue(event.target.value);
    onChangeSearchDebonce(event.target.value);
  };

  return (
    <input
      value={searchValue}
      className={styles.root}
      placeholder="Поиск пиццы..."
      onChange={onChangeSearchState}
    />
  );
}

export default Serch;
