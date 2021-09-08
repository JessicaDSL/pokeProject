import { createGlobalStyle } from "styled-components";

import PokemonLight from "../../src/assets/font/PokemonHollow.ttf";
import PokemonBold from "../../src/assets/font/PokemonSolid.ttf";

const Global =  createGlobalStyle`
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
    background: #eee;
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
`;

export default Global;
