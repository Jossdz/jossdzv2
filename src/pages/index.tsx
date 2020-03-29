import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useMapState } from "../hooks/state"

const IndexPage = () => {
  const { setMapState } = useMapState()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>JOSSDZ</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={() => setMapState({ type: "TOGGLETHEME" })}>
        Theme
      </button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
