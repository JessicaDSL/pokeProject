import styled from 'styled-components';

export const ListItem = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  img {
    background: white;
    border-radius: 50%;
    margin-top: 10px;
    padding: 30px;
  }
`;

export const Description = styled.div`
  font-family: PokemonBold;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  letter-spacing: 4px;
  button {
    cursor: pointer;
    border: 0;
    background: none;
    color: white;
  }
`;
