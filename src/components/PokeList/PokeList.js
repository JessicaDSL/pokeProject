import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ pokemons = [] }) => {
  return (
    <Container>
      <List>
        {pokemons.map( ({ image, id }) => (
          <PokeCard image={image} id={id} />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;
//ai ta dando esse erro esquisito
//
