import React from "react";
import { Container } from "./styles";

const PokeDescription = ({ pokeList }) => {
  return (
    <Container>
      <h2>{pokeList.name}</h2>
      <div>
        <h4>National N°: </h4> {pokeList.id}
      </div>
      <div>
        <h4>Types: </h4> {pokeList.types}
      </div>
      <div>
        <h4>Height: </h4> {pokeList.height}
      </div>
      <div>
        <h4>Weight: </h4> {pokeList.weight}
      </div>
      <div>
        <h4>Abilities: </h4> {pokeList.abilities}
      </div>
    </Container>
  );
};

export default PokeDescription;
