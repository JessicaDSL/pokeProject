import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

export const List = styled.div`
  width: 94vw;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 120px 120px 120px 120px;

  @media (max-width: 750px) {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 120px;
  }

  @media (min-width: 750px) and (max-width: 768px) {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px 120px;
  }

  ${media.greaterThan("large")`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 120px 120px 120px;
  `}
`;
