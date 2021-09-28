/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import PokeInfo from "../../components/PokeInfo";

import axios from "axios";

const PokeAbout = () => {
  const [pokeList, setPokeList] = useState([]);

  const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
  });

  useEffect(() => {
    api
      .get(`/pokemon/1`)
      .then(({ data }) => {
        const name = data?.name
        const id = data?.id
        const image = `https://cdn.traction.one/pokedex/pokemon/${id}.png`
        const species = data?.species?.name
        const type = data?.types?.map(item => {
          const pokeDate = item?.type?.name
          return pokeDate
        }).join(', ')
        
        console.log(name, id, 'type', type);
        return setPokeList({name, id, image, species, type});
      })
      .catch((err) => `deu ruim amore: ${err}`);

    console.log('pokelist', pokeList);
    
  }, []);

  return (
    <Container>
      <PokeInfo
        image={pokeList.image}
        id={pokeList.id}
        name={pokeList.name}
        species={pokeList.species}
        type={pokeList.type}
      />
    </Container>
  );
};

export default PokeAbout;
/*const pokeData = data?.map((item) => {
        //const [, , , , , , id] = url.split("/");
        const name = item.name;
        const type = item.type;
        const specie = item.specie;
        
        return { name, type, specie };
       
      });*/
