import React from "react";

import {teamList} from "./team";
import { Container, TeamList } from "./styles";
import PokeChosenTeam from "../PokeChosenTeam";

const TeamSection = () => {
  return (
    <Container>
        <h1>Meu time</h1>

        <TeamList>
          <li>
          {teamList.map((item) => {
            return (
              <PokeChosenTeam image={item.image}  alt={item.alt} />
            );
          })}
          </li>
        </TeamList>
    </Container>
  );
};

export default TeamSection;
