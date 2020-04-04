import styled from "styled-components"
import { yellow } from "./Theme"

// &::before {
//   content: " ";
//   width: 50px;
//   height: 3px;
//   background-color: ${props => (props.active ? yellow : "black")};
//   position: absolute;
//   margin: 10px 0 0 0;
// }
// &::after {
//   content: " ";
//   width: 50px;
//   height: 3px;
//   background-color: ${props => (props.active ? yellow : "black")};
//   position: absolute;
//   margin: -10px 0 0 0;
// }

const SideMenuButton = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  background-color: transparent;
  position: fixed;
  margin: 35px 0 0 15px;
  z-index: 10;
  &::before {
    content: " ";
    width: 50px;
    height: 3px;
    background-color: ${yellow};
    position: absolute;
    margin: 10px 0 0 0;
    transform: ${props => (props.active ? "rotate(45deg)" : "none")};
    transition: all 0.6s ease;
  }
  &::after {
    content: " ";
    width: 50px;
    height: 3px;
    background-color: ${yellow};
    position: absolute;
    margin: ${props => (props.active ? "10px" : "-5px")} 0 0 0;
    transform: ${props => (props.active ? "rotate(-45deg)" : "none")};
    transition: all 0.6s ease;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`
export default SideMenuButton
