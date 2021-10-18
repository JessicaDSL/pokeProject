import React, { useState, useEffect } from "react";

import { Container, List, ListItem, Title } from "./styles";
import TeamCard from "../TeamCard";

const Team = ({ pokemons = [], handleDelete }) => {

  const [ state, setState ] = useState(false);

  useEffect(() => {
    function hasPokemon() {
      if(pokemons.length < 1) {
        setState(false)
      } else {
        setState(true);
      } 
    }
    hasPokemon()
  })
  
  return (
    <Container state={state}>
      <Title>Meu time</Title>
      <List >
        <ListItem>
          {pokemons.map((pokemon, key) => (
            <TeamCard
              image={pokemon.image}
              alt={pokemon.alt}
              name={pokemon.name}
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
