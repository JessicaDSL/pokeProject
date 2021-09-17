import React from "react";
import TeamCard from "../components/TeamCard";

export default {
  title: "Components/TeamCard",
  component: TeamCard,
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
  },
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
  },
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
  },
];

const component = (args) => <TeamCard {...args} />;

export const Default = component.bind({});
Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  alt: "Foto do Pokemon",
};
