import styled from "styled-components";
import media from "styled-media-query";

import pokeBackground from "../../assets/image/pokeBackground.png";

export const Container = styled.div`
  background: url(${pokeBackground}) no-repeat center right pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  img {
    width: 8.3rem;
    height: 7rem;
    cursor: pointer;
    position: relative;
    margin: 0 1rem 0 0;
    backdrop-filter: saturate(80%);
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
  &:hover {
    position: relative;
    top: -6px;
  }

  ${media.lessThan("small")`
  display: flex;
  button {
  }
  img {
    width: 5.5rem;
  }
`}

  ${media.between("small", "medium")`
  display: flex;
  img {
    width: 8rem;
    }
  `}

  ${media.between("medium", "large")`
  display: flex;
  `}
`;

export const Description = styled.div`
  font-family: RobotoRegular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #a40b33;
  padding: 0 0 0 0.8rem;
  min-height: 6rem;
  a {
    color: #a40b33;
  }

  span {
    font-size: large;
    font-weight: lighter;
    color: #a40b33;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: RobotoRegular;
    font-size: 1.5rem;
    font-weight: bold;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
    color: #a40b33;
    margin: 0 0 0 1rem;
  }

  ${media.lessThan("767px")`
    display: flex;
    h3 {
      font-size: large;
    }
    img {
      width: 5.6rem;
    }
    button {
      margin: 0 0 0 .5rem;
    }
  `}
`;
