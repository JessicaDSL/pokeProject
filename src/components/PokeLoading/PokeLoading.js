import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

import PokeLoad from "../../assets/image/pokeloading.png";

import { Description, Content } from "../PokeCard/styles";

const PokeLoading = () => {
  return (
    <>
      <Description>
        <span>N° #000</span>
        <Content>
          <h3>Quem é esse pokemon?</h3>
          <button>
            <FavoriteIcon fontSize="large" />
          </button>
        </Content>
      </Description>
      <div>
        <img src={PokeLoad} alt="" />
      </div>
    </>
  );
};

export default PokeLoading;
