import React from 'react';
import PokeItem from '../components/PokeItem';

export default {
  title: 'Components/PokeItem',
  component: PokeItem,
}

export const Component = (args) => <PokeItem {...args} />

export const Default = Component.bind({})

Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  alt: "Foto do pokemon",
  id: 7,
  name: "Squirtle",
  type: "blabla",
  species: "poison",
}