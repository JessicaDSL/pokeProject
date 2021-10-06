import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ pokemons = [] }) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon, key) => (
          <PokeCard image={pokemon.image} id={pokemon.id} key={key} />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;
