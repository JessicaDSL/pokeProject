import React, { useState, useEffect } from "react";

import PokeBall from "../../assets/image/pokeBackground2.png";
import {
  Container,
  List,
  ListItem,
  Title,
  Content,
} from "./styles";
import TeamCard from "../TeamCard";

const Team = ({ pokemons = [], handleDelete }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    function hasPokemon() {
      if (pokemons.length < 1) {
        setState(false);
      } else {
        setState(true);
      }
    }
    hasPokemon();
  });

  return (
    <Container state={state}>
        <Title>Meu time</Title>
        <List>
          <ListItem>
            {pokemons.map((pokemon, key) => (
              <TeamCard
                image={pokemon.image}
                alt={pokemon.alt}
                name={pokemon.name}
                key={key}
                id={pokemon.id}
                handleDelete={() => handleDelete(pokemon)}
              />
            ))}
          </ListItem>
        </List>
      <Content>
        <hr />
        <img src={PokeBall} alt={"imagem de uma pokebola"} />
        <hr />
      </Content>
    </Container>
  ); 
};

export default Team;
