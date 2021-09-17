import React from "react";

import { List } from "./styles";

const PokeDescription = ({ name, type, species }) => {
  return (
    <List>
      <li>Name: {name}</li>
      <li>Type: {type}</li>
      <li>Specie: {species}</li>
    </List>
  );
};

export default PokeDescription;
