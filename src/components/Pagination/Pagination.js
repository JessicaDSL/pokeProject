import React, { useEffect } from "react";

import { Container, Btn, Button } from "./styles";

const Pagination = ({ selectedPage, setSelectedPage }) => {
  useEffect(() => {}, [selectedPage]);
  const pageNumber = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  function changePageNext() {
    setSelectedPage(selectedPage + 1);
  }

  function changePagePrevious() {
    return selectedPage < 0
      ? alert("nao da pra mudar")
      : setSelectedPage(selectedPage - 1);
  }

  return (
    <Container>
      <Btn>
        <button onClick={() => changePagePrevious()}> &laquo; </button>
        {pageNumber.map((item, key) => {
          return (
            <Button
              selected={item.id === selectedPage}
              onClick={() => {
                setSelectedPage(item.id);
              }}
            >
              <span key={key}>{item.id}</span>
            </Button>
          );
        })}
        <button onClick={() => changePageNext()}> &raquo; </button>
      </Btn>
    </Container>
  );
};

export default Pagination;
