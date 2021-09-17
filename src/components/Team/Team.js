import React from "react";

import { Container, List, ListItem } from "./styles";
import TeamCard from "../TeamCard";

const Team = ({favouritedPokemons}) => {
  return (
    <Container>
      <h1>Meu time</h1>
      {favouritedPokemons.image}
      <List>
        <ListItem>
          {favouritedPokemons.map((pokemon) => 
                <TeamCard image={pokemon.image} alt={pokemon.alt} />
          )}
        </ListItem>
      </List>
    </Container>
  );
};

export default Team;
/* {favouritedPokemons.map(({image, alt}) => (
            <TeamCard image={image} alt={alt} />
          ))}*/
