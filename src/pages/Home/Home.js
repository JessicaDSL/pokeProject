/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { formatPokeList } from "../../utils/utils";
import PokeList from "../../components/PokeList";
import Pagination from "../../components/Pagination";
import api from "../../services/api";

const Home = () => {
  const [listOfPokemons, setListOfPokemons] = useState([{}]);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    api
      .get(`/${fetchPokemon(selectedPage)}`)
      .then(({ data }) => {
        const pokemons = data?.results.map(formatPokeList);
        return setListOfPokemons(pokemons);
      })
      .catch((err) => {
        console.log("Vish! deu um erroMon" + err);
      });
  }, [selectedPage]);

  const fetchPokemon = function fetchPokemon(pageNumber = 0) {
    const offset = pageNumber === 1 ? (pageNumber = 0) : pageNumber * 9;
    const limit = 9;
    return `?offset=${offset}&limit=${limit}`;
  };

  return (
    <Container>
      <PokeList pokemons={listOfPokemons} />

      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </Container>
  );
};

export default Home;