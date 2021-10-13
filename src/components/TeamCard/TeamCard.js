import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container } from "./styles";

const TeamCard = ({ image, alt }) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <button>
        <DeleteIcon />
      </button>
    </Container>
  );
};

export default TeamCard;
