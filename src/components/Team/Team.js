import React from "react";

import { Container, List, ListItem } from "./styles";
import TeamCard from "../TeamCard";

const Team = ({ pokemon = [] }) => {
  return (
    <Container>
      <h1>Meu time</h1>
      <List>
        <ListItem>
          {pokemon.map(({image, alt}) => (
            <TeamCard image={image} alt={alt} />
          ))}
        </ListItem>
      </List>
    </Container>
  );
};

export default Team;
