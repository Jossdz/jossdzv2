import * as React from "react"
import { createGlobalStyle, ThemeProvider, css } from "styled-components"
import { useMapState } from "../hooks/state"
import { MyGlobalProps } from "../@types"

export const yellow = "#FACC48"

const GlobalStyles = createGlobalStyle<MyGlobalProps>`
html, body, #___gatsby, #___gatsby > div {
  width: 100%;
  height:100%;
}
body {
  position: relative;
  background-color: ${props =>
    props.theme.mode === `LIGHT` ? `#FFF` : `#000`};
  }
  p, h1, h2, h3, h4{
    color: ${props => (props.theme.mode === `LIGHT` ? `#000` : `white`)};
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
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Six+Caps&family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme
