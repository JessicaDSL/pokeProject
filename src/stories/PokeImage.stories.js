import React from 'react'
import PokeImage from '../components/PokeImage'

export default {
  title: 'Components/PokeImage',
  component: PokeImage
}

export const Component = (args) => <PokeImage {...args}/>

export const Default = Component.bind({})

Default.args = {
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  alt: "Foto do pokemon",
  id: 7
}