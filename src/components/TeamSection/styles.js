import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  height: 320px;
  justify-content: center;
  align-items: center;
  h1 {
    width: 50vw;
    background-color: #f1305a;
    text-align: center;
    padding-bottom: 10px;
    font-family: PokemonLight;
    height: 60px;
    color: #fff;
    border-radius: 4px 4px 0px 0px;
    font-size: 2rem;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
  }
`;

export const TeamList = styled.ul`
  width: 50vw;
  padding: 30px 0;
  background-color: pink;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  li {
    background-color: #fff;
    border-radius: 50%;
    padding: 1.5rem;
    cursor: pointer;
  }
  span {
    color: white;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    padding: 10px;
  }
`;
