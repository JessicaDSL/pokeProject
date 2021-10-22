import styled from "styled-components";
import LineL from '../../assets/image/lineLeft.png'

export const Background = styled.div`
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFE9F3;
  background: #D56176;
  background-image: url(${LineL});
  font-family: PokemonLight;
  letter-spacing: 4px;

  h2{
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
`