import React from "react";
import PokeDescription from "../PokeDescription";
import PokeStatus from "../PokeStatus";

import { Background } from "./styles";

const PokeInfo = ({
  image,
  id,
  name,
  abilities,
  height,
  types,
  weight,
  status,
}) => {
  return (
    <Background>
      <PokeDescription
        image={image}
        id={id}
        alt={`Foto do pokemon ${name}`}
        name={name}
        types={types}
        abilities={abilities}
        height={height}
        weight={weight}
      />
      <PokeStatus status={status} />
    </Background>
  );
};

export default PokeInfo;
