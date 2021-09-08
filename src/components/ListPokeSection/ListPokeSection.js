import React from "react";

import { Section, PokeSection } from "./styles";
import PokeCard from "../PokeCard";

const ListPokeSection = () => {
  return (
    <Section>
      <PokeSection>
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard /> 
           <PokeCard />    
      </PokeSection>
    </Section>
  );
};

export default ListPokeSection;
