import styled from "styled-components";

export const Component = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(to right, #f1305a 20%, transparent 100%);
  font-family: PokemonHollow;
  letter-spacing: 4px;

  img {
    width: 5rem;
    cursor: pointer;
  }
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px;
`;
