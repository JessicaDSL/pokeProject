import React from "react";

import { Container, List } from "./styles";
import PokeCard from "../PokeCard";

const PokeList = ({ pokemons = [], handleSelect, handleFavorited }) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon, key) => (
          <PokeCard
            id={pokemon.id}
            key={key}
            name={pokemon.name}
            handleSelect={() => handleSelect(pokemon)}
            isFavorited={handleFavorited(pokemon)}
          />
        ))}
      </List>
    </Container>
  );
};

export default PokeList;
