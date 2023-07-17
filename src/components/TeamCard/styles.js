import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 11rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(239, 247, 255, 0.3);
  /*background-color: aqua;*/
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  margin: .5rem 0;
  position: relative;
  img {
    width: 8rem;
  }

  h3 {
    display: none;
    background-color: pink;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 0.2rem 0;
    position: absolute;
    top: 70%;
    font-family: RobotoBold;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    transform: scale(1.1);
    background-color: rgba(239, 247, 255, 0.6);
    h3 {
      display: block;
    }
  }

  ${media.between("700px", "1100px")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30%;
    margin: .5rem;
  `}

  ${media.greaterThan("1101px")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30%;
    min-height: 17rem;
    margin: .5rem;
    img {
    width: 10rem;
  }
  `}


`

export const DeleteButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  color:#a40b33;
  left: 85%;
  top: 10%;
`
