import React from 'react';

import { Container } from './styles';
import Team from '../../components/Team'
import PokeList from '../../components/PokeList'
import Footer from '../../components/Footer'

const Home = () => {
  const favouritedPokemons = [
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    },{
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    },{
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    },{
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    },{
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    },{
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      id: 167,
      name: "venusaur",
      type: "poison",
      species: "venusaur",
    }
  ];
  
  return(
    <Container>
      {console.log({favouritedPokemons})}
      <Team favouritedPokemons={favouritedPokemons} />
      <PokeList favouritedPokemons={favouritedPokemons} />
      <Footer />
    </Container>
  );
}

export default Home;