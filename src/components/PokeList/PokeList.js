import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";
import { cardInfo } from "./content";

const PokeList = () => {
  return (
    <Container>
      <List>
        {cardInfo.map((item) => {
          return(
            <PokeCard image={item.image} id={item.id} />
          )
        })}  
      </List>
    </Container>
  );
};

export default PokeList;
