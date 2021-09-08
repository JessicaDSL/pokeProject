import styled from "styled-components";

export const Component = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to right, #f1305a 20%, transparent 100%);
  font-family: PokemonLight;
  letter-spacing: 4px;

  img {
    width: 6rem;
    height: 6rem;
  }

  div {
    width: 55vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }
`;

