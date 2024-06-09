import React from "react";
import { useDispatch } from "react-redux";
import { onChangeSearch } from "../../redux/filter/slice";
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
    <div className={styles.root}>
      <input
        value={searchValue}
        className={styles.searchInput}
        placeholder="Поиск пиццы..."
        onChange={onChangeSearchState}
      />
    </div>
  );
}

export default Serch;
