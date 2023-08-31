import React from "react";
import Paginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { onChangePage } from "../../redux/slices/filterSlice";

import stales from "./Pagination.module.scss";
import { RootState } from "../../redux/store";

const Pagination = () => {
  const PageValue = useSelector((state: RootState) => state.filter.PageValue);
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
