import React from "react";

import { Background } from "./styles";
import Logo from '../../assets/image/pokeicon.png';


const Header = () => {
  return (
    <Background>
        <h2>PokeJéssy</h2>
        <img src={Logo} alt="Icone de uma Pokebola" />
    </Background>
  );
};

export default Header;
