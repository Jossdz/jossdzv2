import styled from "styled-components"

const FooterStyled = styled.footer`
  padding: 3vh 10vw;
  background-color: var(--yellow);
  color: black;
  position: relative;
  bottom: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  h2 {
    color: black;
    font-size: 2.4rem;
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
