/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokeInfo from "../../components/PokeInfo";
import api from "../../services/api";

import { Container } from "./styles";

const PokeAbout = () => {
  const [pokeList, setPokeList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/${id}`)
      .then(({ data }) => {
        const name = data?.name;
        const id = data?.id;
        const image = `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
        const abilities = data?.abilities
          ?.map((item) => item?.ability?.name)
          .join(", ");
        const height = data?.height;
        const weight = data?.weight;
        const status = data?.stats?.map((item) => {
          const status = item?.base_stat;
          const statusName = item?.stat?.name;
          return { status, statusName };
        });
        const types = data?.types?.map((item) => item?.type?.name).join(", ");
        return setPokeList({
          name,
          id,
          image,
          abilities,
          types,
          height,
          weight,
          status,
        });
      })
      .catch((err) => `deu ruim amore: ${err}`);
  }, []);

  return (
    <Container>
      <PokeInfo pokeList={pokeList} status={pokeList.status} />
    </Container>
  );
};

export default PokeAbout;
