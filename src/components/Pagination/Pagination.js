import React, { useState, useEffect } from "react";

import { Container, Btn, Button, BtnArrow } from "./styles";

const Pagination = ({ handleChange }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const pageNumbers = [
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

  useEffect(() => {
    handleChange(selectedPage);
  }, [selectedPage, handleChange]);

  function changePageNext() {
    selectedPage >= pageNumbers.length
      ? alert("nao da pra mudar")
      : setSelectedPage(selectedPage + 1);
  }

  function changePagePrevious() {
    selectedPage <= 1
      ? alert("nao da pra mudar")
      : setSelectedPage(selectedPage - 1);
  }

  return (
    <Container>
      <Btn>
        <BtnArrow onClick={() => changePagePrevious()}> &laquo; </BtnArrow>
        {pageNumbers.map((item, key) => {
          return (
            <Button
              key={item.id}
              selected={item.id === selectedPage}
              onClick={() => {
                setSelectedPage(item.id);
              }}
            >
              <span key={key}>{item.id}</span>
            </Button>
          );
        })}
        <BtnArrow onClick={() => changePageNext()}> &raquo; </BtnArrow>
      </Btn>
    </Container>
  );
};

export default Pagination;
