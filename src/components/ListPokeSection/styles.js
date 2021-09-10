import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const PokeList = styled.div`
  width: 50vw;
  border-radius: 4px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 270px 270px 270px;
`