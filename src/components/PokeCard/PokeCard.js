import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

import { Container, Description } from "./styles";

const PokeCard = ({ image, id, handleSelect }) => {
  return (
    <Container>
      <Link to={`/pokeabout/${id}`}>
        <img src={image} alt="" />
      </Link>
      <Description>
        <span>{id}</span>
        <button onClick={handleSelect}>
          <FavoriteBorderIcon fontSize="large" />
        </button>
      </Description>
    </Container>
  );
};

export default PokeCard;
