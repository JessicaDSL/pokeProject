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
        const abilities = data?.abilities
          ?.map((item) => item?.ability?.name)
          .join(", ");
        const types = data?.types?.map((item) => item?.type?.name).join(", ");
        return setPokeList({ name, ids, image, abilities, types });
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
        abilities={pokeList.abilities}
        types={pokeList.types}
      />
    </Container>
  );
};

export default PokeAbout;
