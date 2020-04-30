import styled from "styled-components"
import { yellow } from "./Theme"

const HistoryS = styled.section`
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: scroll;
  overflow-y: hidden;

  article {
    width: 80vw;
    max-height: 250px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-beteen;
    height: 250px;
    h3 {
      color: ${yellow};
      font-size: 1.7rem;
      text-align: center;
      height: 20%;
      margin: 0;
    }
    p {
      padding: 10px;
      font-size: 0.9rem;
      margin: 0;
      height: 70%;
    }
    small {
      color: gray;
      padding: 0 10px;
      font-size: 0.9rem;
      height: 10%;
    }
  }
`

export default HistoryS
