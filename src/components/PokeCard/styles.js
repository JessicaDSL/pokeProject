import styled from "styled-components";
import pokeBackground from "../../assets/image/pokeBackground.png";

export const Container = styled.div`
  background: url(${pokeBackground}) no-repeat center right pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  img {
    width: 8.3rem;
    cursor: pointer;
    position: relative;
    margin: 0 1rem 0 0;
  }

  div {
    display: flex;
    button {
      background: blue;
      margin: 3.5rem 0 0 0;
      cursor: pointer;
      border: 0;
      background: none;
      color: #a40b33;
      padding: 20px;
    }
  }
  &:hover {
      position: relative;
      top: -6px;
    }
`;

export const Description = styled.div`
  font-family: RobotoRegular;
  display: flex;
  flex-direction: column;
  color: #a40b33;
  margin: 0 0 0 0.8rem;
  h3 {
    font-family: RobotoRegular;
    font-size: 1.7rem;
    font-weight: bold;
    margin: 1.5rem 0 0 0;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  span {
    font-size: large;
    font-weight: lighter;
    color: #a40b33;
  }
`;
