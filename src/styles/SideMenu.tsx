import styled from "styled-components"
import { yellow } from "./Theme"

const SideMenu = styled.div<{ active: boolean }>`
  width: 75vw;
  height: 100vh;
  background-color: ${yellow};
  position: absolute;
  transform: ${props =>
    props.active ? "translateX(0%)" : "translateX(-100%)"};
  transition: all 0.4s ease-out;
`
export default SideMenu
