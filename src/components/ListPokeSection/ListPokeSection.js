import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Component, Section, Description, PokeOption, List } from "./styles";
import { list } from "./content";

const ListPokeSection = () => {
  function verifyId(item) {
    if (item.ids <= 9) {
      return `#00${item.ids}`;
    } else if (item.ids >= 10 && item.ids <= 99) {
      return `#0${item.ids}`;
    } else {
      return `#${item.ids}`;
    }
  }

  return (
    <Component>
      <Section>
        <List>
          {list.map((item, key) => {
            return (
              <PokeOption key={key}>
                <img src={item.image} alt="" />
                <Description>
                  <span>{verifyId(item)}</span>
                  <button>
                    <FavoriteBorderIcon />
                  </button>
                </Description>
              </PokeOption>
            );
          })}
        </List>
      </Section>
    </Component>
  );
};

export default ListPokeSection;
