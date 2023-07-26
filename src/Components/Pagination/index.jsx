import React from "react";
import Paginate from "react-paginate";

import stales from "./Pagination.module.scss";

function Pagination({ onChangePage }) {
  return (
    <Paginate
      className={stales.root}
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(event) => {
        onChangePage(event.selected + 1);
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
