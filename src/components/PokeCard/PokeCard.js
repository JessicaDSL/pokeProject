import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { list } from "../PokeCard/content";

import { verifyId } from "../../utils/utils";
import { ListItem, Description } from "./styles";

const PokeCard = () => {
  return (
    <>
      {list.map((item, key) => {
        return (
          <ListItem key={key}>
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
