import React from "react";
import PokeImage from "../PokeImage";
import PokeDescription from "../PokeDescription";

import { Background } from "./styles";

const PokeInfo = ({ image, id, name, ability, type }) => {
  return (
    <Background>
      <PokeImage image={image} id={id} alt={`Foto do pokemon ${name}`} />
      <PokeDescription name={name} type={type} ability={ability} />
    </Background>
  );
};

export default PokeInfo;
