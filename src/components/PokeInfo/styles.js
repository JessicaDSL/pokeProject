import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 2.5rem 0 0 0;
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

export const Background = styled.div`
  margin: 0 10rem 0 12rem;
  border-radius: 7px;
  padding: 20px;
  margin: 0 10rem 0 0;
  background: pink;

  ${media.lessThan("medium")`
  width: 94vw;
  margin: 0;
  img {
    width: 14rem;
  } 
  `}

  ${media.between("medium", "large")`
  width: 94vw;
  margin: 0;
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

  ${media.lessThan("medium")`
  background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 16rem;
    img {
      width: 13rem;
      position: static;
      margin: 2rem 0 0 0;
    }
  `}

  ${media.between("medium", "large")`
  background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 16rem;
    img {
      width: 13rem;
      position: static;
      margin: 2rem 0 0 0;
    }
  `}

  ${media.between("large", "huge")`
  img {
      width: 20rem;
      margin: 2rem 0 0 0;
    }
  `}
`;

export const Box = styled.div`
  height: 10px;
  width: 100%;
  background: pink;
  border-radius: 0 0 20px 20px;
  margin: 0 0 2rem 0;
  ${media.greaterThan("large")`
    display: none;
  `}
`;
