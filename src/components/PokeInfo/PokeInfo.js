import React from "react";
import PokeImage from "../PokeImage";
import PokeDescription from "../PokeDescription";

import { Background } from "./styles";

const PokeInfo = ({image, id, alt, name, species, type}) => {
  return (
    <Background>
      <PokeImage image={image} id={id} alt={alt}/>
      <PokeDescription name={name} type={type} species={species} />
    </Background>
  );
};

export default PokeInfo;
