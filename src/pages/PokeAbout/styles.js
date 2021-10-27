import styled from "styled-components";
import media from "styled-media-query";

import pokeBackground2 from '../../assets/image/pokeBackground2.png'
import pokeBackground from '../../assets/image/pokerbackground.png'

export const Container = styled.div`
  background: url(${pokeBackground2}) no-repeat 70% 25%;
  background-size: 32rem;

  ${media.lessThan("large")`
    background: url(${pokeBackground}) no-repeat 70% 25%;
  `}

  ${media.between("large", "huge")`
  background: url(${pokeBackground2}) no-repeat 72% 15%;
  background-size: 18rem;
  `}
`;
