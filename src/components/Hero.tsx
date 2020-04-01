import * as React from "react"
import { HeroStyled } from "../styles/components"

export interface HerroProps {}

export default function Hero(props: HerroProps) {
  return (
    <HeroStyled>
      <h1>JOSSDZ</h1>
      <p>Jose Carlos Correa</p>
    </HeroStyled>
  )
}
