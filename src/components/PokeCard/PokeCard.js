import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

import { formatPokeId } from "../../utils/utils";

import { Container, Description, Content } from "./styles";
import PokeLoading from "../PokeLoading/PokeLoading";
const PokeCard = ({ id, name, isLoading, handleSelect, isFavorited = false }) => {
  const [pokeImage, setPokeImage] = useState("");
  

  useEffect(() => {
    id <= 649
      ? setPokeImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        )
      : setPokeImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
        );
  }, [id]);

  return (
    <Container>
      {isLoading ? (
        <PokeLoading active={isLoading} />
      ) : (
        <>
          <Description loading={isLoading} >
            <span>N° {formatPokeId(id)}</span>
            <Content>
              <Link to={`/pokeabout/${id}`}>
                <h3>{name}</h3>
              </Link>
              <button onClick={handleSelect}>
                {isFavorited ? (
                  <FavoriteIcon fontSize="large" />
                ) : (
                  <FavoriteBorderIcon fontSize="large" />
                )}
              </button>
            </Content>
          </Description>
          <div>
            <Link to={`/pokeabout/${id}`}>
              <img src={pokeImage} alt="" />
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default PokeCard;
