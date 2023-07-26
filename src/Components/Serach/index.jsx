import React from "react";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

function Serch() {
  const { searcValue, setSerchValue } = React.useContext(SearchContext);
  return (
    <input
      value={searcValue}
      className={styles.root}
      placeholder="Поиск пиццы..."
      onChange={(event) => {
        setSerchValue(event.target.value);
      }}
    />
  );
}

export default Serch;
