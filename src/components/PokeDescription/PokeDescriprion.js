import React from "react";

import { Container, List, ListItem } from "./styles";

const PokeDescription = ({
  image,
  alt,
  id,
  name,
  height,
  weight,
  types,
  abilities,
}) => {
  return (
    <Container>
      <div>
        <h2>{name}</h2>
        <List>
          <ListItem><h4>National n°: </h4> {id}</ListItem>
          <ListItem><h4>Types: </h4> <span>{types}</span></ListItem>
          <ListItem><h4>Height: </h4> {height}</ListItem>
          <ListItem><h4>Weight: </h4> {weight}</ListItem>
          <ListItem><h4>Abilities: </h4> {abilities}</ListItem>
        </List>
      </div>
      <img src={image} alt={alt} />
    </Container>
  );
};

export default PokeDescription;
