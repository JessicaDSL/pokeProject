/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import PokeInfo from "../../components/PokeInfo";
import api from "../../services/api";

const PokeAbout = () => {
  const [pokeList, setPokeList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/${id}`)
      .then(({ data }) => {
        const name = data?.name;
        const ids = data?.id;
        const image = `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
        const ability = data?.abilities
          ?.map((item) => {
            const pokeDateAbility = item?.ability?.name;
            return pokeDateAbility;
          })
          .join(", ");
        const type = data?.types
          ?.map((item) => {
            const pokeDateType = item?.type?.name;
            return pokeDateType;
          })
          .join(", ");
        console.log(ability);
        return setPokeList({ name, ids, image, ability, type });
      })
      .catch((err) => `deu ruim amore: ${err}`);
  }, []);

  //
  return (
    <Container>
      <PokeInfo
        image={pokeList.image}
        id={pokeList.ids}
        name={pokeList.name}
        ability={pokeList.ability}
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
