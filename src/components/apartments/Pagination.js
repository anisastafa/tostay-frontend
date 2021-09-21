import ReactPaginate from "react-paginate";
import React from "react";
import '../../App.css'

export const Pagination = ({pageCount, changePage}) => {
    return (
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            // marginPagesDisplayed={2}
            // pageRangeDisplayed={5}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    )
};