import React from "react";
import PokeList from "../components/PokeList";

export default {
  title: "Components/PokeList",
  component: PokeList,
};

const pokemons = [
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    id: 167,
    name: "venusaur",
    type: "poison",
    species: "venusaur",
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    id: 167,
    name: "venusaur",
    type: "poison",
    species: "venusaur",
  }
];

const component = (args) => <PokeList {...args} />;

export const Default = component.bind({});
Default.args = {pokemons};
