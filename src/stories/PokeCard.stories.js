import React from "react";
import PokeCard from "../../src/components/PokeCard";

export default {
  title: "Components/PokeCard",
  component: PokeCard,
};

const component = (args) => <PokeCard {...args} />;

export const Default = component.bind({});

Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  id: 167,
};

