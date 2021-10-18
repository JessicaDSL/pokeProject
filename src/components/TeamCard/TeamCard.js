import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Description } from "./styles";

const TeamCard = ({ image, alt, name, handleDelete }) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <Description>
        <h3>{name}</h3>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </Description>
    </Container>
  );
};

export default TeamCard;
