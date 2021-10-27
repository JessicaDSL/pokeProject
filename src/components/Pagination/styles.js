import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0 5rem 0;
`;

export const Btn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: ${({ selected }) => (selected ? "#F1245A" : "#F3C7CE")};
  padding: 15px;
  color: ${({ selected }) => (selected ? "#FFE9F3" : "#F1245A")};
  cursor: pointer;
  border: 0;
  width: 3.5rem;
  height: 3.5rem;
  margin: 2px;
  border-radius: 4px;
  font-family: RobotoRegular;
  font-weight: bold;

  &:hover {
    background-color: #f1245a;
    color: #ffe9f3;
    transition: 0.3s ease-in-out;
  }

  ${media.lessThan("medium")`
    padding: 5px;
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export const BtnArrow = styled.button`
  padding: 15px;
  cursor: pointer;
  border: 0;
  background: none;
  color: #f1245a;
  width: 3.5rem;
  height: 3.5rem;
  margin: 2px;
  border-radius: 4px;
  
  &:hover {
    background-color: pink;
    transition: 0.2s ease-in-out;
  }

  ${media.lessThan("medium")`
    padding: 4px;
    width: 1.2rem;
    height: 1.2rem;
  `}
`;
