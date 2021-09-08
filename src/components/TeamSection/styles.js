import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  ul {
    list-style: none;
  }
  
`;

export const TeamList = styled.div`
  width: 50vw;
  height: 260px;
  background-color: pink;
  border-radius: 4px;

  h1 {
    background-color: #f1305A;
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
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
  ul li {
    background-color: #fff;
    border-radius: 50%;
    padding: 1.5rem;
    cursor: pointer;
  }
`
