import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useMapState } from "../hooks/state"
import { MyGlobalProps } from "../@types"

const GlobalStyles = createGlobalStyle<MyGlobalProps>`
@import url('https://fonts.googleapis.com/css?family=Six+Caps|Source+Sans+Pro&display=swap');
body {
    background-color: ${props =>
      props.theme.mode === `LIGHT` ? `#FFF` : `#000`};
  }
  p, h1, footer{
    color: ${props => (props.theme.mode === `LIGHT` ? `#131313` : `white`)};
  }
  h1,h2,h3,h4,h5{
      letter-spacing: 1px;
  }
`

const Theme: React.FunctionComponent = ({ children }) => {
  const {
    mapState: { theme },
  } = useMapState()
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme
