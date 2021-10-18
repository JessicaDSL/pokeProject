import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px 0;
`;

export const Btn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: ${({ selected }) => (selected ? "#F1245A" : "#F3C7CE")};
  padding: 15px;
  color:${({ selected }) => (selected ? "#EFF7FF" : "#F1245A")};
  cursor: pointer;
  border: 0;
  width: 3.5rem;
  height: 3.5rem;
  margin: 2px;
  border-radius: 4px;
  font-family: RobotoRegular;
  font-weight: bold;
  &:hover {
    background-color: #F1245A;
    color: #EFF7FF;
    transition: .3s ease-in-out;
  }
`;

export const BtnArrow = styled.button`
  padding: 15px;
  cursor: pointer;
  border: 0;
  background: none;
  color: #F1245A;
  width: 3.5rem;
  height: 3.5rem;
  margin: 2px;
  border-radius: 4px;
  &:hover {
    background-color: pink;
    transition: .2s ease-in-out;
  }
`;
