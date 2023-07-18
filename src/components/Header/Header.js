import React from "react";

import { Background } from "./styles";
import PokeImageRight from "../../assets/image/pokelogo1.png";
import PokeImageLeft from "../../assets/image/pokeImageleft.png";

const Header = () => {
  return (
    <Background>
      <img src={PokeImageLeft} alt="icone de um pokemon" />
      <h2>PokeJessy</h2>
      <img src={PokeImageRight} alt="icone de um pokemon" />
    </Background>
  );
};

export default Header;
