import styled from "styled-components";
import media from "styled-media-query";

import LineL from "../../assets/image/lineLeft.png";

export const Background = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe9f3;
  background: #d56176;
  background-image: url(${LineL});
  font-family: PokemonLight;
  letter-spacing: 4px;

  h2 {
    font-size: 4.5rem;
    letter-spacing: 4.5px;
    margin-bottom: 1rem;
    margin: 0 9rem;
    font-family: Righteous;
  }

  img {
    width: 19rem;
    overflow: hidden;
  }

  ${media.lessThan("small")`
  height: 6.5rem;
    img {
      display: none;
      overflow: hidden;
    }
    h2 {
      font-size: 3.4rem;
    }
  `}

  ${media.between("small", "medium")`
  width: 100%;
  img {
      display: none;
      overflow: hidden;
    }
    h2 {
      font-size: 5rem;
      margin: 0;
    }
  `}

  ${media.between("medium", "large")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  img {
    width: 13rem;
    overflow: hidden;
  }
  h2 {
      font-size: 3rem;
      margin: 0 2rem;
    }
  `}

  ${media.between("large", "huge")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  img {
    width: 16rem;
    overflow: hidden;
  }
  h2 {
      font-size: 5rem;
      margin: 0 4rem;
    }
  `}

  ${media.greaterThan("huge")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  img {
    width: 20rem;
  }
  h2 {
      font-size: 5rem;
      margin: 0 10rem;
    }
  `}
`;
