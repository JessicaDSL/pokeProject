import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { ListItem, Description } from "./styles";
import { cardInfo } from "./content";
import { verifyId } from "../utils/utils";

const PokeCard = () => {
  return (
    <>
      {cardInfo.map((item, key) => {
        return (
          <ListItem key={key}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <Description>
              <span>{verifyId(item)}</span>
              <button>
                <FavoriteBorderIcon fontSize="large" />
              </button>
            </Description>
          </ListItem>
        );
      })}
    </>
  );
};

export default PokeCard;

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
