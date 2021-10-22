import React from "react";
import PokeDescription from "../components/PokeDescription";

export default {
  title: "Components/PokeDescription",
  component: PokeDescription,
};

const Component = (args) => <PokeDescription {...args} />;
export const Default = Component.bind({});

Default.args = {
  name: "Squirtle",
  type: "blabla",
  species: "poison",
};

