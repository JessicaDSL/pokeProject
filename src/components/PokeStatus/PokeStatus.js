import React from "react";

import { Container, List, ListItem } from "./styles";

const PokeStatus = ({ status = [] }) => {
  const maxValue = 200;
  const maxValueTotal = maxValue * 6;

  return (
    <Container>
      <h2>Base Status</h2>
      <List>
        <ListItem>
          {status.map((item, index) => (
            <div key={index}>
              <h4>{item.statusName}</h4> <span>{item.status}</span>
              <progress value={item.status} max={maxValue}></progress>
            </div>
          ))}
        </ListItem>
        <div>
          <h4>Total</h4> <span>1800</span>
          <progress value="400" max={maxValueTotal}></progress>
        </div>
      </List>

      <span>
        The ranges shown on the top are for a level 100 Pokémon. Maximum values
        are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are
        based on a hindering nature, 0 EVs, 0 IVs.
      </span>
    </Container>
  );
};

export default PokeStatus;
