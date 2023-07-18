import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: ${({ state }) => (state ? "flex" : "none")};
  flex-direction: column;
  margin: 1rem 0 0 0;
  
  ul {
    list-style: none;
  }

  &:hover {
    transition: transform 0.7s ease;
  }

  ${media.between("small", "medium")`
    width: 96vw;
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
  width: 96vw;
  background-color: #f3c7ce;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 1rem 0;

  ${media.between("700px", "1100px")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
  `}


  ${media.greaterThan("1101px")`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `}
`;

export const Title = styled.div`
  width: 96vw;
  background-color: #d56176;
  font-family: Bungee;
  color: pink;
  border-radius: 10px 10px 0px 0px;
  font-size: 1.5rem;
  letter-spacing: 5px;
  height: 50px;
  text-align: center;
  padding-bottom: 18px;

`;

export const Content = styled.div`
  height: 1px;
  display: none;
  margin: 2rem 0 0 0;
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
  margin: 2.5rem 0 0 0;
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
