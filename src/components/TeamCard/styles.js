import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  height: 9rem;
  width: 80vw;
  margin: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-items: center;
  background-color: rgba(239, 247, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.1);

  img {
    padding: 10px 0 30px 0;
  }
  div {
    display: none;
    background: pink;
    margin: 10px 0 0 0;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    transform: scale(1.1);
    background-color: rgba(239, 247, 255, 0.7);
    div {
      display: flex;
    }
  }

  ${media.lessThan("small")`
  height: 0rem;
  width: 50%;
  flex: 1;
  padding: 4rem 2rem;
  margin: .2rem;
    img {
      width: 4.5rem;
    }
    div {
      display: none;
    }
  `}

  ${media.between("small", "medium")`
  height: 0rem;
  width: 25%;
  padding: 3.5rem 5.5rem;
  margin: .2rem;
    img {
      width: 5rem;
    }
    div {
      display: none;
    }
    `}

  
    ${media.between("medium", "large")`
      height: 0rem;
      width: 10%;
      padding: 6rem 2rem;
      flex: 1;
      margin: .2rem;
        img {
          width: 7rem;
        }
        div {
          display: none;
        }
  `}

  ${media.between("large", "huge")`
  display: flex;
  width: 16%;
  height: 0rem;
  padding: 7.5rem 0rem;
  margin: .2rem;
  img {
    width: 8rem;
  }
  div {
    display: none;
  }
  `}

  ${media.between("1440px", "1700px")`
  width: 15%;
  height: 0rem;
  padding: 7.5rem 0rem;
  margin: .2rem;
  img {
    width: 8rem;
  }
  div {
    display: none;
  }
  `}

 ${media.greaterThan("1700px")`
    height: 0rem;
    display: flex;
    width: 15%;
    padding: 9rem 0rem;
    margin: .6rem;
    img {
      width: 9rem;
    }
  `}
`;

export const Description = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 8rem;
  cursor: auto;
  font-family: RobotoRegular;
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: white;
  position: relative;
  top: -1rem;
  & :first-letter {
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    border-radius: 50%;
    border: 0;
    color: white;
    background: none;
    transform: scale(1.5);
    margin: 5px 0 0 40px;
  }
`;
