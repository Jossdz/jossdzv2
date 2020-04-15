import styled from "styled-components"
import { yellow } from "./Theme"

const SideMenu = styled.div<{ active: boolean }>`
  width: 75vw;
  height: 100vh;
  background-color: ${props =>
    props.theme.mode === "DARK" ? "black" : "white"};
  position: fixed;
  transform: ${props =>
    props.active ? "translateX(0%)" : "translateX(-100%)"};
  transition: all 0.4s ease-out;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100%;
  z-index: 3;
  nav {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    padding-bottom: 30px;
  }
  a {
    text-decoration: none;
  }
  h2 {
    text-align: center;
    transition: color 0.2s ease;
    font-size: 2.4rem;
    padding: 10px 0;
  }
  h2:hover {
    color: ${yellow};
  }

  & svg:nth-child(1) {
    color: ${props => (props.theme.mode === "DARK" ? "white" : yellow)};
    cursor: pointer;
  }
  & svg:nth-child(2) {
    color: ${props => (props.theme.mode === "LIGHT" ? "black" : yellow)};
    cursor: pointer;
  }
`
export default SideMenu
