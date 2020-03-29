import * as React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

interface MyGlobalProps{
    theme: {
        mode: 'light' | 'dark'
    }
}

const GlobalStyles = createGlobalStyle<MyGlobalProps>`
@import url('https://fonts.googleapis.com/css?family=Six+Caps|Source+Sans+Pro&display=swap');
body {
    background-color: ${props => props.theme.mode === `light` ? `#FFF` : `#000`};
  }
  p, h1, footer{
    color: ${props => props.theme.mode === `light` ? `#131313` : `white`};
  }
  h1,h2,h3,h4,h5{
      letter-spacing: 3px;
  }
`

const Theme: React.FunctionComponent = ({children}) => <ThemeProvider theme={{mode: 'dark'}}>
    <GlobalStyles/>
    {children}
</ThemeProvider>

export default Theme