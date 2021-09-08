import React from "react";

import { Section, PokeSection } from "./styles";
import PokeCard from "../../PokeCard";

const ListPokeSection = () => {
  return (
    <Section>
      <PokeSection>
           <PokeCard />    
      </PokeSection>
    </Section>
  );
};

export default ListPokeSection;
