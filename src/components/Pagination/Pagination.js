import React from "react";

import { Container, Button, BtnArrow } from "./styles";

const Pagination = ({
  limitePages,
  countPages,
  setCurrentPage,
  currentPage,
  getCurrentPage,
}) => {
  const totalPages = Math.ceil(countPages / limitePages);

  let prevNumber = currentPage < 3 ? 0 : currentPage - 3;
  let afterNumber = currentPage === 0 ? currentPage + 7 : 7;
  let arrayTotalPages = Array.from(Array(totalPages), (_, index) => index);

  let rangePages = arrayTotalPages.splice(prevNumber, afterNumber);

  function changePageNext() {
    currentPage >= totalPages
      ? alert("nao da pra mudar")
      : setCurrentPage(currentPage + 1);
  }

  function changePagePrevious() {
    currentPage <= 0
      ? alert("nao da pra mudar")
      : setCurrentPage(currentPage - 1);
  }

  function handleCurrentPage(page) {
    console.log("page aqui", page);
    getCurrentPage(Number(page));
  }

  return (
    <Container>
      {currentPage > 0 && (
        <BtnArrow onClick={changePagePrevious}> &laquo; </BtnArrow>
      )}
      {rangePages.map((item, key) => {
        return (
          <Button
            key={item}
            selected={item === currentPage}
            onClick={(e) => handleCurrentPage(e.target.textContent)}
          >
            <span key={key}>{item + 1}</span>
          </Button>
        );
      })}
      {currentPage > totalPages && (
        <BtnArrow onClick={() => changePageNext()}> &raquo; </BtnArrow>
      )}
    </Container>
  );
};

export default Pagination;
