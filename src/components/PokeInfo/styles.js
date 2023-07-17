import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 2.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe9f3;
  font-family: RobotoRegular;

  ${media.lessThan("medium")`
    margin: 0 0 2.5rem 0;
    display: flex;
    flex-direction: column-reverse;
    img {
      width: 5rem;
    }
  `}

  ${media.between("medium", "large")`
    margin: 0 0 2.5rem 0;
    display: flex;
    flex-direction: column-reverse;
    img {
      width: 5rem;
    }
  `}
`;

export const Content = styled.div`
  margin: 0 10rem 0 12rem;
  border-radius: 7px;
  padding: 20px;
  margin: 0 10rem 0 0;
  background: pink;

  ${media.lessThan("medium")`
  background: pink;
  width: 94vw;
  margin: 0;
  img {
    width: 14rem;
  } 
  `}

  ${media.between("medium", "large")`
  width: 94vw;
  margin: 0;
  background: pink;
    img {
      width: 14rem;
    }
  `}
`;

export const Image = styled.div`
  margin: 0 0 0 0;

  img {
    width: 38rem;
    position: relative;
    left: 10%;
    margin: 5rem 0 0 0;
  }

  ${media.lessThan("767px")`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 12rem;
    background: pink;
    img {
      height: 8rem;
      width: 8rem;
      position: static;
      margin: 1rem 0;
    }
  `}

  ${media.between("768px", "large")`
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 16rem;
    img {
      width: 10rem;
      position: static;
      margin: 2rem 0;
    }
  `}

  ${media.between("large", "huge")`
  img {
      width: 20rem;
      margin: 2rem 0 0 0;
    }
  `}
`;

export const Separator = styled.div`
  height: 10px;
  width: 100%;
  background: pink;
  border-radius: 0 0 20px 20px;
  margin: 0 0 2rem 0;
  ${media.greaterThan("large")`
    display: none;
  `}
`;


export const Button = styled.button`
  background-color: #a40b33;
  color: #fff;
  font-weight: 700;
  font-size: large;
  border: none;
  border-radius: 7px;
  padding: .5rem 2rem;
  margin: 1rem 0;
`