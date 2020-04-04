import styled from "styled-components"

const StackTech = styled.div`
  height: 200px;
  display: flex;
  align-items: center;

  overflow-x: scroll;
  overflow-y: hidden;
  & > div {
    width: 150px;
    min-width: 150px;
    display: inline-block;
    margin-right: 9%;
  }
  img {
    filter: grayscale(100%);
    width: 100%;
    margin: 0;
  }
  img:hover {
    filter: grayscale(0%);
  }
`

export default StackTech
