import React from "react";
import { Container } from "./styles";

const PokeDescription = ({ pokeList }) => {
  return (
    <Container>
      <h2>{pokeList.name}</h2>
      <p><h4>National N°: </h4> {pokeList.id}</p>
      <p><h4>Types: </h4> {pokeList.types}</p>
      <p><h4>Height: </h4> {pokeList.height}</p>
      <p><h4>Weight: </h4> {pokeList.weight}</p>
      <p><h4>Abilities: </h4> {pokeList.abilities}</p>
    </Container>
  );
};

export default PokeDescription;
