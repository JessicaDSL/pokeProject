import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ favouritedPokemons }) => {
  return (
    <Container>
      <List>
        {favouritedPokemons.map( ( pokemons ) => (
          <PokeCard image={pokemons.image} id={pokemons.id} />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;