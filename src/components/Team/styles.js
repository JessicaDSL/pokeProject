import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: ${({ state }) => (state ? "flex" : "none")};
  flex-direction: column;
  margin: 2rem 0 0px 0;

  ul {
    list-style: none;
  }

  &:hover {
    transition: transform 0.7s ease;
  }

  ${media.lessThan("small")`
    width: 96vw;
  `}

  ${media.between("small", "medium")`
    width: 94vw;
    padding: 1rem 0;
  `}

  ${media.between("large", "huge")`
    padding: 1rem 0;
  `}

  ${media.greaterThan("large")`
  padding: 3rem 0;
  `}
`;


export const List = styled.ul`
  width: 94vw;
  background-color: #f3c7ce;
  border-radius: 0 0 10px 10px;
  padding: 5rem 18px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.lessThan("small")`
    width: 96vw;
    padding: .5rem 0;
  `}

  ${media.between("small", "medium")`
    width: 94vw;
    padding: 2rem 0;
  `}

  ${media.between("medium", "large")`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  `}

  ${media.between("large", "huge")`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  `}

  ${media.greaterThan("huge")`
    padding: 2.5rem 0;
    display: flex;
    justify-content: center;
  `}
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2px;

  ${media.lessThan("small")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${media.between("small", "medium")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${media.between("medium", "large")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 92vw;
  `}

  ${media.between("large", "huge")`
  display: flex;
  justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 92vw;
  `}

  ${media.between("1440px", "1700px")`
  display: flex;
  justify-content: center;
  `}

  ${media.greaterThan("1700px")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 92vw;
  `}
`;

export const Title = styled.div`
  width: 94vw;
  background-color: #d56176;
  font-family: Bungee;
  color: pink;
  border-radius: 10px 10px 0px 0px;
  font-size: 1.5rem;
  letter-spacing: 5px;
  height: 50px;
  text-align: center;
  padding-bottom: 18px;

  ${media.lessThan("small")`
  width: 96vw;
  `}
`;

export const Content = styled.div`
  height: 1px;
  display: none;
  margin: 4rem 0 0 0;
  hr {
    width: 8rem;
    height: 1.5px;
    color: pink;
    background: pink;
    border: 0;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  ${media.lessThan("small")`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  ${media.between("small", "medium")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  height: .5px;
  margin: 5rem 0 0 0;
  `}

  ${media.between("medium", "large")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr {
    width: 15rem;
    height: 1.5px;
    color: pink;
    background: pink;
    border: 0;
  }
  `}

  ${media.between("large", "huge")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr {
    width: 15rem;
    height: 1.5px;
    color: pink;
    background: pink;
    border: 0;
  `}
`;
