import React from "react";

import { pokeImage } from "../../utils/utils";
import { Component, TeamList } from "./styles";

const TeamSection = () => {
  return (
    <Component>
      <TeamList>
        <h1>Meu time</h1>

        <ul>
          <li>
            <img src={pokeImage} alt="" />
          </li>
          <li>
            <img src={pokeImage} alt="" />
          </li>
          <li>
            <img src={pokeImage} alt="" />
          </li>
          <li>
            <img src={pokeImage} alt="" />
          </li>
          <li>
            <img src={pokeImage} alt="" />
          </li>
        </ul>
      </TeamList>
    </Component>
  );
};

export default TeamSection;
