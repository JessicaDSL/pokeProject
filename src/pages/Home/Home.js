/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { formatPokeList } from "../../utils/utils";
import PokeList from "../../components/PokeList";
import Pagination from "../../components/Pagination";
import Team from "../../components/Team";

const Home = () => {
  const [listOfPokemons, setListOfPokemons] = useState([{}]);
  const [favouritedPokemons, setFavouritedPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPages, setCountPages] = useState(1);
  const limitePages = 15;

  const fetchPokemon = async () => {
    let offset = currentPage * 15;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limitePages}`
    );
    const data = await response.json();
    const formatPoke = data.results.map(formatPokeList);
    setListOfPokemons(formatPoke);
    setCountPages(data.count);
  };

  useEffect(() => {
    fetchPokemon();
  }, [currentPage]);

  function addPokemonToFavorite(pokemon) {
    setFavouritedPokemons([...favouritedPokemons, pokemon]);
  }

  function removePokemonFromFavorite(pokemon) {
    const pokemons = [...favouritedPokemons];
    const index = pokemons.findIndex((item) => item.id === pokemon.id);
    if (index === -1) return;
    pokemons.splice(index, 1);
    setFavouritedPokemons(pokemons);
  }

  function isFavorited(pokemon) {
    const favoritedPoke = favouritedPokemons.find(
      (item) => item.id === pokemon.id
    );
    return favoritedPoke;
  }

  function handleSelect(pokemon) {
    if (favouritedPokemons.length >= 6) {
      alert("Só pode adicionar 6 pokemons");
      return;
    }

    isFavorited(pokemon)
      ? removePokemonFromFavorite(pokemon)
      : addPokemonToFavorite(pokemon);
  }

  function getCurrentPage(page) {
    console.log("page:", page);
    setCurrentPage(page - 1);
  }

  return (
    <Container>
      <Team
        pokemons={favouritedPokemons}
        handleDelete={removePokemonFromFavorite}
      />
      <PokeList
        pokemons={listOfPokemons}
        handleSelect={handleSelect}
        handleFavorited={isFavorited}
      />
      <Pagination
        handleChange={fetchPokemon}
        countPages={countPages}
        limitePages={limitePages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        getCurrentPage={getCurrentPage}
      />
    </Container>
  );
};

export default Home;
