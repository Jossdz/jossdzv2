import * as React from "react"
import { HeroStyled } from "../styles/components"
import Layout from "../components/layout"

export interface HerroProps {}

export default function Hero(props: HerroProps) {
  return (
    <Layout>
      <HeroStyled>
        <h1>JOSSDZ</h1>
        <p>Jose Carlos Correa</p>
      </HeroStyled>
    </Layout>
  )
}
