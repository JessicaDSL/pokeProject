import React from "react";
import TeamCard from "../components/TeamCard";

export default {
  title: "Components/TeamCard",
  component: TeamCard,
};

export const component = (args) => <TeamCard {...args} />;

export const Default = component.bind({});

Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  alt: "Foto do pokemon",
};

export const Blank = component.bind({});
