import React from "react";

import { Container } from "./styles";
import { formatPokeId } from "../../utils/utils";

const PokeImage = ({ image, alt, id }) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <span>{formatPokeId({ id })}</span>
    </Container>
  );
};

export default PokeImage;
