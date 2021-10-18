import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 4px 0 0 4px;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-family: RobotoRegular;
  color: white;
  letter-spacing: 1px;
  img {
    padding: 1rem;
  }
  h2 {
    font-size: 3rem;
    &::first-letter {
      text-transform: uppercase;
    }
    background: #f1245a;
    border-radius: 4px;
    padding: 15px;
  }
  span {
    background: pink;
    border-radius: 4px;
    padding: 5px;
  }
`;

export const List = styled.ul`
  margin: 15px 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 8px 10px;
  padding: 5px;
  h4 {
    font-family: RobotoBold;
    margin: 0 5px 0 0;
    letter-spacing: 4px;
  }
`;
