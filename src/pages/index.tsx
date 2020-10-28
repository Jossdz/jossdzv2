import React, { useEffect } from "react"
import { useMapState } from "../hooks/state"
import Hero from "../components/Hero"
import LandingInfo from "../components/LandingInfo"
import SEO from "../components/seo"

const IndexPage = () => {
  const { setMapState, mapState: { showingMenu } } = useMapState()

  useEffect(() => { if (showingMenu) setMapState({ type: 'CLOSEMENU' }) }, [])

  return (
    <>
      <SEO
        description="Jossdz portfolio 2020"
        lang="en"
        title="Jossdz | Jose Carlos Correa"
      />
      <Hero />
      <LandingInfo />
    </>
  )
}

export default IndexPage
