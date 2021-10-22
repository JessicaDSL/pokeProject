import styled from "styled-components";

export const Container = styled.div`
  color: #a40b33;
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
  h2 {
    background: #a40b33;
    padding: 5px 15px;
    width: 70%;
    color: #ffe9f3;
    font-weight: bolder;
    letter-spacing: 0.05rem;
    font-size: 2rem;
    border-radius: 7px;
    margin: 0 0 15px 0;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  h4 {
    margin: 0 6px 0 0;
    letter-spacing: 0.1rem;
    font-size: 1rem;
  }
  p {
    display: flex;
    margin: 0 0 12px 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
`;

export const ListItem = styled.li`
  display: flex;
  margin: 0 0 12px 0;
`;
