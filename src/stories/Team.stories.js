import React from "react";

import Team from "../components/Team";

export default {
  title: "Components/Team",
  component: Team,
};

const favouritedPokemons = [
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  },{
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  },{
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    alt: "Foto do pokemon",
  }
];

const component = (args) => <Team {...args} />;

export const Default = component.bind({});
Default.args = { favouritedPokemons };

