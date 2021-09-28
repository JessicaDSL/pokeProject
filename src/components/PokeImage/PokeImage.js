import React from "react";

import { Container } from "./styles";

const PokeImage = ({image, alt, id}) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <span>{id}</span>
    </Container>
  );
};

export default PokeImage;
