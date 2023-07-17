import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Button = styled.button`
  background: ${({ selected }) => (selected ? "#F1245A" : "#F3C7CE")};
  color: ${({ selected }) => (selected ? "#FFE9F3" : "#F1245A")};
  border: 0;
  border-radius: 4px;
  font-family: RobotoRegular;
  font-weight: bold;

  width: 2.5rem;
  height: 3rem;
  margin: 0.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f1245a;
    color: #ffe9f3;
    transition: 0.3s ease-in-out;
  }

  ${media.lessThan("medium")`
    width: 1.5rem;
    height: 1.5rem;
  `}
`;

export const BtnArrow = styled.button`
  padding: 15px;
  cursor: pointer;
  border: 0;
  background: none;
  color: #f1245a;
  width: 2.5rem;
  height: 3rem;
  margin: 2px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: pink;
    transition: 0.2s ease-in-out;
  }

  ${media.lessThan("medium")`
    padding: 4px;
    width: 1rem;
    height: 1rem;
  `}
`;
