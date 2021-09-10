import styled from "styled-components";

export const Background = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: linear-gradient(to right, #f1305a 20%, transparent 100%);
  font-family: PokemonLight;
  letter-spacing: 4px;

  h2{
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  img {
    width: 5rem;
    cursor: pointer;
    margin-left: 20px;
  }
`