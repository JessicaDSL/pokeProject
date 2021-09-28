import React from "react";

import { List } from "./styles";

const PokeDescription = ({ name, type, ability }) => {
  return (
    <List>
      <li>Name: {name}</li>
      <li>Type: {type}</li>
      <li>Ability: {ability}</li>
    </List>
  );
};

export default PokeDescription;
