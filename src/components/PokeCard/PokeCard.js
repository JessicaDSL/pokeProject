import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { ListItem, Description } from "./styles";
import { formatPokeId } from "../../utils/utils";

const PokeCard = ({ image, id }) => {
  return (
    <ListItem>
      <div>
        <img src={image} alt="" />
      </div>
      <Description>
        <span>{formatPokeId({id})}</span>
        <button>
          <FavoriteBorderIcon fontSize="large" />
        </button>
      </Description>
    </ListItem>
  );
};

export default PokeCard;

/*
              
              
              */

/*<ListItem key={key}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <Description>
                  <span>{verifyId(item)}</span>
                  <button>
                    <FavoriteBorderIcon />
                  </button>
                </Description>
              </ListItem>
            );*/
