import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ pokemons = [] }) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon) => (
          <PokeCard image={pokemon.image} id={pokemon.id} />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;
