import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

import { formatPokeId } from "../../utils/utils";

import { Container, Description, FavPoke } from "./styles";

const PokeCard = ({
  image,
  id,
  name,
  handleSelect,
  isFavorited = false,
}) => {
  return (
    <Container>
      <Description>
        <div>
          <span>N° {formatPokeId(id)}</span>
          <h3>{name}</h3>
        </div>
        <FavPoke>
          <ul>
            <li>Fire</li>
            <li>Water</li>
          </ul>
          <button onClick={handleSelect}>
            {isFavorited ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </button>
        </FavPoke>
      </Description>
      <Link to={`/pokeabout/${id}`}>
        <img src={image} alt="" />
      </Link>
    </Container>
  );
};

export default PokeCard;
