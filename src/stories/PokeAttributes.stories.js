import React from "react";
import PokeAttributes from "../components/PokeAttributes";

export default {
  title: "Components/PokeAttributes",
  component: PokeAttributes,
};

export const Component = (args) => <PokeAttributes {...args} />;
export const Default = Component.bind({});

Default.args = {
  name: "Squirtle",
  type: "blabla",
  species: "poison",
};

export const Blank = Component.bind({});
