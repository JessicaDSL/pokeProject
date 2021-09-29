import React from "react";

import { List } from "./styles";

const PokeDescription = ({ name, types, abilities }) => {
  return (
    <List>
      <li>Name: {name}</li>
      <li>Type: {types}</li>
      <li>Ability: {abilities}</li>
    </List>
  );
};

export default PokeDescription;
