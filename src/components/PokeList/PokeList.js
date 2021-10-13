import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ pokemons = [], handleSelect }) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon, key) => (
          <PokeCard
            image={pokemon.image}
            id={pokemon.id}
            key={key}
            handleSelect={() => handleSelect(pokemon)}
          />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;
