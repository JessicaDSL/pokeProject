import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Container, Description } from "./styles";
import { formatPokeId } from "../../utils/utils";

const PokeCard = ({ image, id }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="" />
      </div>
      <Description>
        <span>{formatPokeId({id})}</span>
        <button>
          <FavoriteBorderIcon fontSize="large" />
        </button>
      </Description>
    </Container>
  );
};

export default PokeCard;
