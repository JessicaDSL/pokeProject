import React from "react";

import { Container } from "./styles";
import { pokeData } from "./mock";
import PokeInfo from "../../components/PokeInfo";

const PokeAbout = () => {
  return (
    <Container>
      <PokeInfo pokeData={pokeData} />
    </Container>
  );
};

export default PokeAbout;
