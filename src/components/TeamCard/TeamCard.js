import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Description, DeleteButton } from "./styles";

const TeamCard = ({ image, alt, name, handleDelete, id }) => {
  return (
    <Container>
      <DeleteButton onClick={handleDelete}>
        <DeleteIcon />
      </DeleteButton>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt=""
      />
      <h3>{name}</h3>
    </Container>
  );
};

export default TeamCard;
