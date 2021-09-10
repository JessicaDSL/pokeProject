import React from "react";

import { Container, PokeList } from "./styles";
import PokeCard from "../PokeCard";
import { cardInfo } from "../ListPokeSection/content";

const ListPokeSection = () => {
  return (
    <Container>
      <PokeList>
        {cardInfo.map((item) => {
          return(
            <PokeCard image={item.image} id={item.id} />
          )
        })}  
      </PokeList>
    </Container>
  );
};

export default ListPokeSection;
