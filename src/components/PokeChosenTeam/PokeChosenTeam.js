import React from "react";

import { Container } from "./styles";
import DeleteIcon from '@material-ui/icons/Delete';

const PokeChosenTeam = ({ image, alt }) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <span>
        <DeleteIcon />
      </span>
    </Container>
  );
};

export default PokeChosenTeam;
