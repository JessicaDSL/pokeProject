import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Container, List } from "./styles";

const Footer = () => {
  return (
    <Container>
      <List>
        <li>
          <FavoriteIcon />
        </li>
        <li>
          <FavoriteIcon />
        </li>
        <li>
          <FavoriteIcon />
        </li>
      </List>
    </Container>
  );
};

export default Footer;
