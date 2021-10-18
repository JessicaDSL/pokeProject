import styled from "styled-components";
import pokeBackground from "../../assets/image/pokeBackground.png";

export const Container = styled.div`
  background: url(${pokeBackground}) no-repeat center right pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  img {
    width: 8.3rem;
    cursor: pointer;
    position: relative;
    top: -5px;
  }
`;

export const Description = styled.div`
  font-family: RobotoRegular;
  display: flex;
  flex-direction: column;
  color: #a40b33;
  margin: 0 0 0 12px;

  h3 {
    font-family: RobotoRegular;
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0 0 5px 0;
  }
  span {
    font-size: large;
    font-weight: lighter;
    color: #a40b33;
  }
`;

export const FavPoke = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    border: 0;
    background: none;
    color: #a40b33;
    padding: 20px;
    &:hover {
      color: #a40b33;
    }
  }

  ul {
    display: flex;
    li {
      background: #a40b33;
      margin: 2px;
      padding: 5px 8px;
      height: 25px;
      display: inline;
      border-radius: 4px;
      font-weight: light;
      text-transform: uppercase;
      color: white;
      letter-spacing: 3px;
      font-size: 0.8rem;
    }
  }
`;
