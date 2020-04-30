import styled from "styled-components"

const StackSlide = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  & > div {
    width: 150px;
    min-width: 150px;
    height: 150px;
    min-height: 150px;
    display: inline-block;
    margin-right: 9%;
  }
  img {
    filter: grayscale(100%);
    width: 100%;
    margin: 0;
    object-fit: scale-down !important;
  }
  img:hover {
    filter: grayscale(0%);
  }
`

export default StackSlide
