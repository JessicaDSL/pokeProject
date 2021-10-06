import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: ${({ selected }) => (selected ? "pink" : "#eee")};
  padding: 15px;
  cursor: pointer;
  border: 1px solid pink;
  margin: 10px 5px;
  border-radius: 4px;
  &:hover {
    background-color: pink;
  }
`;
