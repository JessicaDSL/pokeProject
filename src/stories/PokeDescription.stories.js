import React from "react";
import PokeDescription from "../components/PokeDescription";

export default {
  title: "Components/PokeDescription",
  component: PokeDescription,
};

export const Component = (args) => <PokeDescription {...args} />;
export const Default = Component.bind({});

Default.args = {
  name: "Squirtle",
  type: "blabla",
  species: "poison",
};

export const Blank = Component.bind({});
