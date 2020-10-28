import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useMapState } from "../hooks/state"
import { MyGlobalProps } from "../@types"

export const yellow = "#FACC48"

const GlobalStyles = createGlobalStyle<MyGlobalProps>`
:root{
  --yellow: #FACC48;
  --soft-dark: #131313;
  --soft-white: #FBFBFB;
}
html,  #___gatsby, #___gatsby> div  {
  width: 100%;
  height:100%;
}
body {
  transition: all 0.8s ease;
  position: relative;
  min-height: 100%;
  background-color: ${props =>
    props.theme.mode === `LIGHT` ? `var(--soft-white)` : `var(--soft-dark)`};
  }
  p, h1, h2, h3, h4{
    color: ${props => (props.theme.mode === `LIGHT` ? `#000` : `white`)};
  }
  h1,h2,h3,h4,h5{
    letter-spacing: 1px;
  }
  #___gatsby{
    min-height: 100vh;
    position: relative;
  }
li{
  color: ${props =>
    props.theme.mode === `LIGHT` ? `black` : `white`};
  }
}
`

const Theme: React.FunctionComponent = ({ children }) => {
  const {
    mapState: { theme },
  } = useMapState()
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Six+Caps&display=swap" rel="stylesheet" />

      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme
