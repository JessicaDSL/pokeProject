import React from "react";

import { Container } from "./styles";
import { favouritedPokemons, pokemons } from "./mock";
import Team from "../../components/Team";
import PokeList from "../../components/PokeList";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Team favouritedPokemons={favouritedPokemons} />
      <PokeList pokemons={pokemons} />
      <Footer />
    </Container>
  );
};

export default Home;
