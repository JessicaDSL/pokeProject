import React from "react";

import { Component, Head } from "./styles";
import Logo from '../../assets/image/pokeicon.png';


const Header = () => {
  return (
    <Component>
      <Head>
        <h2>JessyMon</h2>
        <img src={Logo} alt="Icone de uma Pokebola" />
      </Head>
    </Component>
  );
};

export default Header;
