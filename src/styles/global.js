import { createGlobalStyle } from "styled-components";

import PokemonLight from "../../src/assets/font/PokemonHollow.ttf";
import PokemonBold from "../../src/assets/font/PokemonSolid.ttf";
import Bungee from "../../src/assets/font/Bungee-Regular.ttf";
import RobotoRegular from "../../src/assets/font/RobotoRegular.ttf";
import RobotoBold from "../../src/assets/font/RobotoBold.ttf";
import Righteous from "../../src/assets/font/Righteous.ttf";
import PokeBackground from '../../src/assets/image/pokerbackground.png'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  body{
    background: url(${PokeBackground});
  }

  button {
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  @font-face {
    font-family: PokemonLight;
    src: url(${PokemonLight});
  }

  @font-face {
    font-family: PokemonBold;
    src: url(${PokemonBold});
  }

  @font-face {
  font-family: Bungee;
  src: url(${Bungee});
  }

  @font-face {
  font-family: RobotoRegular;
  src: url(${RobotoRegular});
  }

  @font-face {
  font-family: RobotoBold;
  src: url(${RobotoBold});
  }

  @font-face {
    font-family: Righteous;
    src: url(${Righteous})
  }

`;

export default Global;
