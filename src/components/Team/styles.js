import styled from "styled-components";

export const Container = styled.div`
  display: ${({ state }) => (state ? "block" : "none")};
  flex-direction: column;
  margin: 40px 0 0 0;
  ul {
    list-style: none;
  }
  &:hover {
    transition: transform 0.7s ease;
  }
`;

export const List = styled.ul`
  width: 80vw;
  height: 260px;
  background-color: #F3C7CE;
  border-radius: 0 0 4px 4px;
  padding: 26px 18px;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  cursor: pointer;
`;

export const Title = styled.div`
    width: 80vw;
    background-color: #D56176;
    font-family: Bungee;
    color: pink;
    border-radius: 4px 4px 0px 0px;
    font-size: 1.5rem;
    letter-spacing: 5px;
    height: 50px;
    text-align: center;
    padding-bottom: 18px;
`;
