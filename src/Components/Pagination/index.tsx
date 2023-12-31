import React from "react";
import Paginate from "react-paginate";
import { useDispatch } from "react-redux";

import stales from "./Pagination.module.scss";

import { onChangePage } from "../../redux/filter/slice";

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <Paginate
      className={stales.root}
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(event) => {
        dispatch(onChangePage(event.selected + 1));
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
