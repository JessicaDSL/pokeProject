import React from "react";

import { Component, Section, List } from "./styles";
import PokeCard from "../PokeCard";

const ListPokeSection = () => {
  return (
    <Component>
      <Section>
        <List>
           <PokeCard />          
        </List>
      </Section>
    </Component>
  );
};

export default ListPokeSection;
