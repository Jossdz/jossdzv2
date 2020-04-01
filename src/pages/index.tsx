import React from "react"

import { useMapState } from "../hooks/state"
import Hero from "../components/Hero"

const IndexPage = () => {
  const { setMapState } = useMapState()
  return <Hero />
}

export default IndexPage
