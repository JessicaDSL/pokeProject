import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
`;

export const List = styled.ul`
  display: flex;
  li {
    padding: 20px;
    margin: 0 20px;
    color: pink;
    cursor: pointer;
    &:hover {
      color: #f1305a;
    }
  }
`;
