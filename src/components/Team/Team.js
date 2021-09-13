import React from "react";

import { Container, TeamList, ListItem } from "./styles";
import TeamCard from "../TeamCard";

const Team = ({ pokemon = [] }) => {
  return (
    <Container>
      <h1>Meu time</h1>
      <TeamList>
        <ListItem>
          {pokemon.map(({image, alt}) => (
            <TeamCard image={image} alt={alt} />
          ))}
        </ListItem>
      </TeamList>
    </Container>
  );
};

export default Team;
