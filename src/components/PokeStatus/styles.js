import styled from "styled-components";

export const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: RobotoRegular;
  color: #eff7ff;
  letter-spacing: 3px;
  h2 {
    display: flex;
    font-size: 3rem;
    background: #f1245a;
    border-radius: 4px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    width: 80vw;
  }
  span {
    color: #556f7a;
    letter-spacing: 0.3px;
    margin: 70px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0
`;

export const ListItem = styled.li`
  width: 80vw;
  display: flex;
  margin: 8px 10px;
  padding: 5px;
  h4 {
    font-family: RobotoBold;
    margin: 0 5px 0 0;
    letter-spacing: 4px;
  }
`;
