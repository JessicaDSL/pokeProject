import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 13rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 247, 255, 0.5);
  border-radius: 2px;
  padding: 12px 0;
  margin: 0 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  img {
    width: 10rem;
  }
  div {
    opacity: 0;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    transform: scale(1.1);
    background-color: rgba(239, 247, 255, 0.7);
    div {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 0;
  background-color: rgba(213, 97, 118, 0.6);
  cursor: auto;
  font-family: RobotoRegular;
  letter-spacing: 1px;
  color: rgba(239, 255, 255);
  & :first-letter {
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    border-radius: 50px;
    border: 0;
    background: none;
    color: rgba(239, 255, 255, 0.8);
  }
`;
