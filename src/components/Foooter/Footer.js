import React from "react";

import { numberPage } from "./content";
import { Component, NumberList } from './styles'

const Footer = () => {
  return (
    <Component>
      {numberPage.map((item, key) => {
        return <NumberList key={key}>{item.number}</NumberList>;
      })}
    </Component>
  );
};

export default Footer;
