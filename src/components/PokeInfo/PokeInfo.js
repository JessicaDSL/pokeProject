import React from "react";

import PokeDescription from '../PokeDescription'
import PokeStatus from "../PokeStatus";

import { Container, Background, Image} from './styles'

const PokeInfo = ({ pokeList = [], status = [] }) => {

  return (
    <Container>
      <Background>
        <PokeDescription pokeList={pokeList} />
        <PokeStatus status={status} />
      </Background>
      <Image>
        <img src={pokeList.image} alt={pokeList.name} />
      </Image>
    </Container>
  );
};

export default PokeInfo;
