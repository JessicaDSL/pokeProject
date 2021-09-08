import React from "react";

import { Component } from "./styles";
import Logo from '../../assets/image/pokeicon.png';


const PokeHeader = () => {
  return (
    <Component>
      <div>
        <h2>PokeJéssy</h2>
        <img src={Logo} alt="Icone de uma Pokebola" />
      </div>
    </Component>
  );
};

export default PokeHeader;
