import styled from "styled-components"

import { yellow } from "./Theme"

const FooterStyled = styled.footer`
  padding: 3vh 10vw;
  background-color: ${yellow};
  color: black;
  h2 {
    color: black;
  }
  nav {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    a {
      width: 50%;
      color: black;
      text-decoration: none;
      text-align: center;
      font-size: 1.1rem;
      transition: all 0.6s ease;
    }
    a:hover {
      letter-spacing: 2px;
      transform: scale(1.1);
  }
`

export default FooterStyled
