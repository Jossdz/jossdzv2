import React from "react"

import { useMapState } from "../hooks/state"
import Hero from "../components/Hero"
import LandingInfo from "../components/LandingInfo"

const IndexPage = () => {
  const { setMapState } = useMapState()
  return (
    <>
      <Hero />
      <LandingInfo />
    </>
  )
}

export default IndexPage
