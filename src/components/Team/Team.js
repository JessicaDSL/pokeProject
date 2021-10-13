import React from "react";

import { Container, List, ListItem } from "./styles";
import TeamCard from "../TeamCard";

const Team = ({ pokemons = [], handleDelete }) => {
  return (
    <Container>
      <h1>Meu time</h1>
      <List>
        <ListItem>
          {pokemons.map((pokemon, key) => (
            <TeamCard
              image={pokemon.image}
              alt={pokemon.alt}
              key={key}
              handleDelete={() => handleDelete(pokemon)}
            />
          ))}
        </ListItem>
      </List>
    </Container>
  );
};

export default Team;
