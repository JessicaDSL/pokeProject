import React from "react";
import PokeImage from "../PokeImage";
import PokeDescription from "../PokeDescription";

import { Background } from "./styles";

const PokeInfo = ({ pokeData }) => {
  return (
    <Background>
      <PokeImage image={pokeData.image} id={pokeData.id} alt={pokeData.alt} />
      <PokeDescription
        name={pokeData.name}
        type={pokeData.type}
        species={pokeData.species}
      />
    </Background>
  );
};

export default PokeInfo;
