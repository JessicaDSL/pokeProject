/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { formatPokeList } from "../../utils/utils";
//import Team from "../../components/Team";
import PokeList from "../../components/PokeList";
import Footer from "../../components/Footer";
import axios from "axios";

const Home = () => {
  const [listOfPokemons, setListOfPokemons] = useState([{}]);
  const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
  });

  useEffect(() => {
    api
      .get(`/pokemon/`)
      .then(({ data }) => {
        const pokemons = data?.results.map(formatPokeList);
        return setListOfPokemons(pokemons);
      })
      .catch((err) => {
        console.log("Vish! deu um erroMon" + err);
      });
  }, []);


  // <Team favouritedPokemons={favouritedPokemons} />

  return (
    <Container>
      <PokeList pokemons={listOfPokemons} />
      <Footer />
    </Container>
  );
};

export default Home;
/*console.log({favouritedPokemons.results.name});
      <PokeList pokemons={pokemons} />*/

/*async function fetchData() {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const pokemons = result.results;
      return pokemons;
    }*/

/*useEffect(() => {
    
  });

  useEffect(() => {
    async function fetchData() {
      //const response = await MyAPI.getData(someId);
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const pokemon = result.results;
      return pokemon
    }
    
    fetchData();
  }, []);*/

/*const { results, next } = axios.get("https://pokeapi.co/api/v2/")
  console.log('resuts é esse', results, next);*/

/*api
    .get("/pokemon")
    .then((response) => setFavouritedPokemons(response.data))
    .catch((err) => {
      console.log("Vish! deu um erroMon" + err);*/
/*const id = 2;

  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((response) => setListOfPokemons(response?.data))
      .catch((err) => {
        console.log("Vish! deu um erroMon" + err);
      });

    
  }, []);*/
