import React from "react"

import { useMapState } from "../hooks/state"
import Hero from "../components/Hero"
import LandingInfo from "../components/LandingInfo"
import SEO from "../components/seo"
import Footer from "../components/Footer"

const IndexPage = () => {
  const { setMapState } = useMapState()
  return (
    <>
      <SEO
        description="Jossdz portafolio 2020"
        lang="es"
        title="Jossdz | Jose Carlos Correa"
      />
      <Hero />
      <LandingInfo />
    </>
  )
}

export default IndexPage
