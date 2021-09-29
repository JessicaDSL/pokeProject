import React from "react";
import PokeImage from "../PokeImage";
import PokeDescription from "../PokeDescription";

import { Background } from "./styles";

const PokeInfo = ({ image, id, name, abilities, types }) => {
  return (
    <Background>
      <PokeImage image={image} id={id} alt={`Foto do pokemon ${name}`} />
      <PokeDescription name={name} types={types} abilities={abilities} />
    </Background>
  );
};

export default PokeInfo;
