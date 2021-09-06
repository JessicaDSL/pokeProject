import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  background-color: gainsboro;
  height: 600px;
  width: 70vw;
  border-radius: 4px;
  display: grid;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 2rem;
  background: blue;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
`;

export const PokeOption = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    background: white;
    border-radius: 50%;
    padding: 4px;
    width: 40%;
  }
`;

export const Listq = styled.div`
  list-style: none;
  background: goldenrod;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: 50px 50px 50px 50px;
  grid-gap: 2rem;
  /*
  div {
    width: 150px;
    height: 180px;
    border-radius: 4px;
    letter-spacing: 2px;
  }*/

  img {
    background: white;
    border-radius: 50%;
    padding: 5px;
  }
`;

export const Description = styled.div`
  height: 90px;
  width: 100%;
  color: white;
  letter-spacing: 4px;
  font-family: PokemonBold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    cursor: pointer;
    border: 0;
    background: pink;
    color: white;
  }
`;
