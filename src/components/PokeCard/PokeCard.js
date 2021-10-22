import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

import { formatPokeId } from "../../utils/utils";

import { Container, Description } from "./styles";

const PokeCard = ({ image, id, name, handleSelect, isFavorited = false }) => {
  return (
    <Container>
      <Description>
        <span>N° {formatPokeId(id)}</span>
        <h3>{name}</h3>
      </Description>
      <div>
        <button onClick={handleSelect}>
          {isFavorited ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>
      <Link to={`/pokeabout/${id}`}>
        <img src={image} alt="" />
      </Link>
      </div>
    </Container>
  );
};

export default PokeCard;
