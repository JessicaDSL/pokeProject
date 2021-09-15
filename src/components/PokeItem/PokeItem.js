import React from "react";
import PokeImage from "../PokeImage";
import PokeAttributes from "../PokeAttributes";

import { Background } from "./styles";

const PokeItem = ({image, id, alt, name, species, type}) => {
  return (
    <Background>
      <PokeImage image={image} id={id} alt={alt}/>
      <PokeAttributes name={name} type={type} species={species} />
    </Background>
  );
};

export default PokeItem;
