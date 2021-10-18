import React from "react";

import { Container, List, ListItem } from "./styles";

const PokeStatus = ({ status }) => {
  function total() {
    const totals =
      status?.[0] +
      status?.[1] +
      status?.[2] +
      status?.[3] +
      status?.[4] +
      status?.[5];
    return totals;
  }

  return (
    <Container>
      <div>
        <h2>Base status</h2>
        <List>
          <ListItem><h4>HP</h4> {status?.[0]}</ListItem>
          <ListItem><h4>Attack</h4> {status?.[1]}</ListItem>
          <ListItem><h4>Defense</h4> {status?.[2]}</ListItem>
          <ListItem><h4>Sp.Atk</h4> {status?.[3]}</ListItem>
          <ListItem><h4>Sp.Def</h4> {status?.[4]}</ListItem>
          <ListItem><h4>Speed</h4> {status?.[5]}</ListItem>
          <ListItem><h4>Total</h4> {total()}</ListItem>
        </List>
      </div>
      <span>
        The ranges shown on the top are for a level 100 Pokémon. Maximum values
        are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are
        based on a hindering nature, 0 EVs, 0 IVs.
      </span>
    </Container>
  );
};

export default PokeStatus;