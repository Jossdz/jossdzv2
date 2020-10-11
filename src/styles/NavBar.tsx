import styled from "styled-components"
import { yellow } from "./Theme"

const Navbar = styled.nav`
  width: 100%;
  height: 8vh;
  background-color: ${yellow};
  position: absolute;
  display: none;
  h2 {
    margin: 0;
    color: black;
    font-size: 1rem;
    font-family: sans-serif, "Open Sans";
    a {
      color: black;
    }
    a::visited {
      color: black;
    }
  }
  & > h2 {
    font-family: sans-serif, "Six Caps";
  }
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & > h2 {
    position: absolute;
    left: 3vw;
    font-size: 2.3rem;
  }
  a {
    text-decoration: none;
    margin-right: 5vw;
    transition: all 0.3s ease;
  }
  a:hover {
    transform: scale(1.1);
  }
  svg {
    margin-right: 3vw;
    cursor: pointer;
  }
`

export default Navbar
