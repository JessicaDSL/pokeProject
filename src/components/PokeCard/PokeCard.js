import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

import { Container, Description } from "./styles";

const PokeCard = ({ image, id, handleSelect, isFavorited = false }) => {
  return (
    <Container>
      <Link to={`/pokeabout/${id}`}>
        <img src={image} alt="" />
      </Link>
      <Description>
        <span>{id}</span>
        <button onClick={handleSelect}>
          {isFavorited ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>
      </Description>
    </Container>
  );
};

export default PokeCard;
