import styled from "styled-components";

export const Container = styled.div`
  color: #a40b33;
  width: 35vw;
  h2 {
    background: #a40b33;
    padding: 5px 15px;
    width: 100%;
    color: #ffe9f3;
    font-weight: bolder;
    letter-spacing: 0.05rem;
    font-size: 2rem;
    border-radius: 7px;
  }
  span {
    color: #a40b33;
    font-size: smaller;
  }
`;

export const List = styled.ul`
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  font-size: larger;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    margin: 10px 0;
    progress {
      appearance: none;
      width: 20rem;
      height: 18px;
      display: flex;
      border-radius: 50%;
      &::-webkit-progress-bar {
        background: #FFE9F3;
        border-radius: 7px;
        padding: 2px;
      }
      &::-moz-progress-bar {
        background: black;
        border-radius: 7px;
        padding: 2px;
      }
      &::-webkit-progress-value {
        border-radius: 50px;
        background: #a40b33;
      }
    }
    span {
      width: 8rem;
    }
    h4 {
      width: 14rem;
      margin: 0 6px 0 0;
      letter-spacing: 0.1rem;
      font-size: 1rem;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;
