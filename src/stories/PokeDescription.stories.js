import React from 'react'
import PokeDescription from '../components/PokeDescription'

export default {
  title: 'Components/PokeDescription',
  component: PokeDescription
}

const Component = (args) => <PokeDescription {...args}/>

export const Default = Component.bind({})

Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  alt: "Foto do pokemon",
  id: 7
}