import React from "react"
import Theme from "./src/styles/Theme"
import { MapProvider } from "./src/hooks/state"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <MapProvider>
      <Theme>
        <Layout>{element}</Layout>
      </Theme>
    </MapProvider>
  )
}
