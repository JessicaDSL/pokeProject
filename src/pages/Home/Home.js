/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { formatPokeList } from "../../utils/utils";
//import Team from "../../components/Team";
import PokeList from "../../components/PokeList";
import Footer from "../../components/Footer";
import api from "../../services/api";

const Home = () => {
  const [listOfPokemons, setListOfPokemons] = useState([{}]);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    api
      .get(`/`)
      .then(({ data }) => {
        const pokemons = data?.results.map(formatPokeList);
        return setListOfPokemons(pokemons);
      })
      .catch((err) => {
        console.log("Vish! deu um erroMon" + err);
      });
  }, []);

  return (
    <Container>
      <PokeList pokemons={listOfPokemons} />
      <Footer />
    </Container>
  );
};

export default Home;
