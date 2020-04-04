import styled from "styled-components"
import { yellow } from "./Theme"

const InfoStyled = styled.div`
  padding: 6vh 10vw;
  p {
    text-align: justify;
  }
  h2 {
    font-size: 2.4rem;
  }
  svg {
    color: ${yellow};
    text-align: center;
    width: 100% !important;
    margin-bottom: 15px;
  }
  hr {
    color: ${yellow};
    background-color: ${yellow};
    position: relative;
  }
  hr::after {
    content: " ";
    position: absolute;
    right: -3px;
    top: -4.4px;
    width: 10px;
    height: 10px;
    clip-path: polygon(90% 50%, 0 0, 0 100%);
    background-color: ${yellow};
  }
`

export default InfoStyled
