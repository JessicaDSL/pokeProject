import React from "react";
import { Link } from "react-router-dom";

import PokeDescription from "../PokeDescription";
import PokeStatus from "../PokeStatus";

import { Container, Content, Image, Separator, Button } from "./styles";


const PokeInfo = ({ pokeList = [], status = [] }) => {
  

  return (
    <Container>
      <Content>
        <PokeDescription pokeList={pokeList} />
        <PokeStatus status={status} />
        <Link to={`/`}>
          <Button>
            VOLTAR
          </Button>
        </Link>
      </Content>
      <Separator></Separator>
      <Image>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeList.id}.svg`} alt="" />
      </Image>
    </Container>
  );
};

export default PokeInfo;
