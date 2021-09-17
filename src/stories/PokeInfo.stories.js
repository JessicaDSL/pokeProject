import React from 'react';
import PokeInfo from '../components/PokeInfo';

export default {
  title: 'Components/PokeInfo',
  component: PokeInfo,
}

const Component = (args) => <PokeInfo {...args} />

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